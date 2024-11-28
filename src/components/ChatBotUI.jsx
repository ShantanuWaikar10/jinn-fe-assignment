import React from "react";

const ChatBotUI = ({ styles }) => {
  const chatStyle = {
    borderColor: styles.borderColor,
    borderRadius: `${styles.borderRadius}px`,
    fontFamily: styles.fontFamily,
  };

  return (
    <div className="chatbot-ui" style={chatStyle}>
      <div>
        <div
          className="chat-title"
          style={{
            backgroundColor: styles.chatTitleBg,
            borderTopRightRadius: `${styles.borderRadius}px`,
            borderTopLeftRadius: `${styles.borderRadius}px`,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <div className="btn-icon">{styles.buttonIcon}</div>
            <div className="chat-title-text">
              <h4>Jinn Live</h4>
              <p>Demo Bot</p>
            </div>
          </div>
          <span style={{ color: "white", marginRight: "10px" }}>X</span>
        </div>
        <div className="chat-messages">
          <div
            className="user-message"
            style={{
              backgroundColor: styles.userBubbleBg,
              color: styles.userTextColor,
            }}
          >
            <span>Hello Jinn</span>
          </div>
          <div
            className="bot-message"
            style={{
              backgroundColor: styles.botBubbleBg,
              color: styles.botTextColor,
            }}
          >
            Hello Anurag! How can I help you today?
          </div>
        </div>
      </div>
      <div className="input-div">
        <input className="user-input" type="text" placeholder="Ask us anything..." />
      </div>
    </div>
  );
};

export default ChatBotUI;
