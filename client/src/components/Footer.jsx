import React from "react";

const Footer = () => {
    return (
        <footer className="bg-blue-800 text-white mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                {/* Contact Section */}
                <div>
                    <h1 className="text-2xl font-bold mb-4">Let's Work Together</h1>
                    <div>
                        <p className="text-sm font-semibold">Phone</p>
                        <p className="text-lg mb-2">+919266537839</p>
                        <p className="text-sm font-semibold">Email</p>
                        <p className="text-lg">info@vriddhi.media</p>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div>
                    <h1 className="text-2xl font-bold mb-4">Get in the Know</h1>
                    <form className="flex flex-col gap-4">
                        <label htmlFor="email" className="text-sm">
                            Enter your email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your email"
                            className="p-2 bg-transparent text-white border-b border-white focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Contact Form */}
                <div>
                    <h1 className="text-2xl font-bold mb-4">Stay in Touch</h1>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* First Name */}
                        <div>
                            <label htmlFor="firstName" className="text-sm">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                placeholder="Your first name"
                                className="w-full p-2 bg-transparent text-white border-b border-white focus:outline-none"
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label htmlFor="lastName" className="text-sm">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                type="text"
                                placeholder="Your last name"
                                className="w-full p-2 bg-transparent text-white border-b border-white focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="emailContact" className="text-sm">
                                Email
                            </label>
                            <input
                                id="emailContact"
                                type="email"
                                placeholder="Your email"
                                className="w-full p-2 bg-transparent text-white border-b border-white focus:outline-none"
                            />
                        </div>

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="text-sm">
                                Subject
                            </label>
                            <input
                                id="subject"
                                type="text"
                                placeholder="Subject"
                                className="w-full p-2 bg-transparent text-white border-b border-white focus:outline-none"
                            />
                        </div>

                        {/* Message */}
                        <div className="col-span-2">
                            <label htmlFor="message" className="text-sm">
                                Leave us a message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Your message"
                                className="w-full p-2 bg-transparent text-white border-b border-white focus:outline-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="col-span-2 text-right">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center py-4 border-t border-blue-600">
                <p className="text-sm">
                    © 2024 Vriddhi Media. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
