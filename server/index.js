const express = require('express');
const cors = require('cors');
const fs = require('fs');
const natural = require('natural');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors({
  origin: process.env.FRONT_URI,
}));
app.use(express.json());

// Initialize the Stemmer
const stemmer = natural.PorterStemmer;
const tokenizer = new natural.WordTokenizer();

// List of words to skip stemming
const stemExceptions = ['personal', 'branding', 'brand', 'service', 'services'];

// Stem word function with exceptions
function stemWord(word) {
  if (stemExceptions.includes(word.toLowerCase())) {
    return word.toLowerCase();
  } else {
    return stemmer.stem(word.toLowerCase());
  }
}

// Read and process the responses
let responses = [];
fs.readFile('responses.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading responses.json:', err);
  } else {
    const rawResponses = JSON.parse(data);
    // Process the keywords in responses
    responses = rawResponses.map(response => {
      const stemmedKeywords = response.keywords.flatMap(keywordPhrase => {
        const keywordTokens = tokenizer.tokenize(keywordPhrase.toLowerCase());
        return keywordTokens.map(token => stemWord(token));
      });
      return { ...response, stemmedKeywords };
    });
  }
});

// Define the chat endpoint
app.post('/api/chat', (req, res) => {
  const { message } = req.body;

  // Generate the reply
  const reply = generateReply(message);

  res.json({ reply });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Function to generate replies based on user input
function generateReply(message) {
  const tokens = tokenizer.tokenize(message.toLowerCase());
  const stemmedTokens = tokens.map(token => stemWord(token));

  let bestScore = 0;
  let bestResponse = null;

  for (let i = 0; i < responses.length; i++) {
    const response = responses[i];
    const matches = stemmedTokens.filter(token => response.stemmedKeywords.includes(token));
    if (matches.length > bestScore) {
      bestScore = matches.length;
      bestResponse = response.response;
    }
  }

  if (bestResponse) {
    return bestResponse;
  }

  return 'I\'m sorry, I did not understand your question. Can you please rephrase it or contact our support for further assistance?';
}