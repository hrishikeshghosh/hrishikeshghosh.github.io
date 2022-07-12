import React, { useState } from "react";
import industries from "./industries.json";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./app.css";
const InputBoxes = () => {
  const [selectedSize, setSelectedSize] = useState(-1);
  const handleSizeSelect = (e, n) => {
    e.preventDefault();
    setSelectedSize(n);
  };

  return (
    <div className="input-boxes">
      <div className="input-box">
        <p className="input-title">Company name</p>
        <input type={"text"} placeholder={"e.g. Example Inc"} />
      </div>
      <div className="input-box">
        <p className="input-title">Industry</p>
        <Select
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          defaultValue={""}
          sx={{
            width: "100%",
            padding: "0%",
            backgroundColor: "white",
            fontSize: "0.9rem",
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
              borderRadius: "3px",
            },
          }}
        >
          <MenuItem hidden={true} value={""} style={{ display: "none" }}>
            <p className="select-placeholder">Select</p>
          </MenuItem>
          {industries.types.map((el) => (
            <MenuItem value={el}>{el}</MenuItem>
          ))}
        </Select>
      </div>
      <div className="input-box">
        <p className="input-title">Company size</p>
        <div>
          {industries.sizes.map((el) => (
            <button
              className={selectedSize === el.value ? "active" : "sizes"}
              onClick={(e) => handleSizeSelect(e, el.value)}
            >
              {el.size}
            </button>
          ))}
        </div>
      </div>
      <div className="input-box">
        <button className="submit-btn">Get Started</button>
      </div>
    </div>
  );
};

export default InputBoxes;
