import React from "react";

const CustomizationPanel = ({ styles, onStyleChange }) => {
  return (
    <div className="customization-panel" style={{color:"white", fontFamily:"Arial"}}>
      <h2>Customize ChatBot UI</h2>
      <div className="customization-panel-label-input">
        {/* Button Icon */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label>Button Icon: </label>
          <input
            type="text"
            value={styles.buttonIcon}
            onChange={(e) => onStyleChange("buttonIcon", e.target.value)}
          />
        </div>

        <br />
        {/* Other customization options (e.g., colors, font, etc.) */}
        <div>
          <label>Border Color: </label>
          <input
            type="color"
            value={styles.borderColor}
            onChange={(e) => onStyleChange("borderColor", e.target.value)}
          />
        </div>

        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label>Border Radius: </label>
          <input
            type="number"
            value={styles.borderRadius}
            onChange={(e) => onStyleChange("borderRadius", e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Chat title bg-color: </label>
          <input
            type="color"
            value={styles.chatTitleBg}
            onChange={(e) => onStyleChange("chatTitleBg", e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Bot chat bubble bg-color: </label>
          <input
            type="color"
            value={styles.botBubbleBg}
            onChange={(e) => onStyleChange("botBubbleBg", e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Bot chat text color: </label>
          <input
            type="color"
            value={styles.botTextColor}
            onChange={(e) => onStyleChange("botTextColor", e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>User chat bubble bg-color: </label>
          <input
            type="color"
            value={styles.userBubbleBg}
            onChange={(e) => onStyleChange("userBubbleBg", e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>User chat text color: </label>
          <input
            type="color"
            value={styles.userTextColor}
            onChange={(e) => onStyleChange("userTextColor", e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Font Family: </label>
          {/* <input
            type="color"
            value={styles.userTextColor}
            onChange={(e) => onStyleChange("userTextColor", e.target.value)}
          /> */}
          <select
            id="font-selector"
            value={styles.fontFamily}
            onChange={(e) => onStyleChange("fontFamily", e.target.value)}
          >
            <option value="Georgia">Arial</option>
            <option value="cursive">Cursive</option>
            <option value="'Times New Roman', Times, serif">
              Times New Roman
            </option>
            <option value="'Courier New', Courier, monospace">
              Courier New
            </option>
            <option value="Georgia">Georgia</option>
            <option value="Verdana">Verdana</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CustomizationPanel;
