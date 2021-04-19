import React, { useState } from "react";
import AddWidgCard from "../Layouts/AddWidgCard";
import Button from "../Buttons/Button";

export default function AddCounter() {
  const [inputText, setInputText] = useState("");
  const [checkError, setCheckError] = useState("");
  let disabled = true;
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputText);
  };

  const handleClickAdd = () => {
    // if (inputText.length < 3) {
    //   setCheckError("Please enter at least 3 characters.");
    // }
    alert("yeah");
  };
  const onSearch = handleClickAdd;

  return (
    <div>
      <h2 className="text-xl mb-2">Add Counter</h2>
      
      <form onSubmit={handleSubmit} className="flex">
        <div className="flex-1 mr-1">
          <input
            type="number"
            value={inputText}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={inputTextHandler}
            placeholder="Enter the initial value"
            className="w-full px-2.5 py-1 focus:outline-none rounded-md"
            min="0"
            max="9999"
          />
        </div>
        <Button doClick={handleClickAdd} disabled={!disabled}>
          Add
        </Button>
      </form>

      <div className="text-red-600 text-xs mt-1">{checkError}</div>
    </div>
  );
}
