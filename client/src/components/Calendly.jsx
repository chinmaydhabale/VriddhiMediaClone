import React, { useEffect } from "react";

const Calendly = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script); // Clean up the script on component unmount
        };
    }, []);

    return (
        <div>
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/chinmaydhabale26?hide_landing_page_details=1&hide_gdpr_banner=1"
                style={{ minWidth: "320px", height: "700px" }}
            ></div>
        </div>
    );
};

export default Calendly;
