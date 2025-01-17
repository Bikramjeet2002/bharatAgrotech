import React from "react";

const Whatsapp = () => {
  return (
    <div>
      <a
        href="https://wa.me/9814551819" // Replace 'your-number' with the WhatsApp number, e.g., 15551234567
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10"
      >
        <img className="w-10 h-10" src="/about/whatsapp.png" alt="" />
      </a>
    </div>
  );
};

export default Whatsapp;
