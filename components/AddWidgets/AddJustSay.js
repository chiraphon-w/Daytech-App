import React, { useState } from "react";
import Button from "../Buttons/Button";

export default function AddJustSay({
  setJustSay,
  handleCancel,
  setListAllWidgets,
  listAllWidgets,
  realTime,
}) {
  const [inputText, setInputText] = useState("");
  const [checkError, setCheckError] = useState("");

  let disabled = false;
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (e.target.title.value.length < 3) {
      setCheckError("Please enter at least 3 characters.");
    } else {
      setJustSay(e.target.title.value);
      handleCancel();

      // handleClickAdd();
      // handleJustsay();
      let id;

      if (listAllWidgets.length == 0) {
        id = 1;
      } else {
        const lastArray = listAllWidgets.slice(-1).pop(); // .slice(-1).pop() เลือก array ตัวสุดท้ายมาให้
        id = lastArray.id + 1;
      }
      const data = {
        value: e.target.title.value,
        id: id,
        date: realTime,
      };
      setListAllWidgets([...listAllWidgets, data]);
    }
  };

  //   const handleClickAdd = () => {
  //     if (inputText.length < 3) {
  //       setCheckError("Please enter at least 3 characters.");
  //     }
  //   };
  //   const onSearch = handleClickAdd;

  return (
    <div>
      <h2 className="text-xl mb-2">Add JustSay</h2>
      <form onSubmit={onSubmit} className="flex">
        <div className="flex-1 mr-1">
          <input
            type="text"
            name="title"
            className="w-full px-2.5 py-1 focus:outline-none rounded-md"
            placeholder="Enter text"
          />
        </div>
        <Button>Add</Button>
      </form>
      <p className="text-red-600 text-xs mt-1">{checkError}</p>
    </div>
  );
}

{
  /* <Button doClick={handleClickAdd} disabled={!disabled}>
Add
</Button> */
}
