import React, { useState } from "react";
import Modal from "../components/Modal";
import { RiAddCircleLine, RiIncreaseDecreaseLine } from "react-icons/ri";
import { BiBomb } from "react-icons/bi";

import WidgetsMenu from "./WidgetsMenu";
import WidgetsCard from "./Layouts/WidgetsCard";
import { AiOutlineMessage } from "react-icons/ai";
import { IoTimerOutline } from "react-icons/io5";

import AddWidgCard from "./Layouts/AddWidgCard";
import Button from "./Buttons/Button";
import Card from "./Layouts/Card";
import AddJustSay from "./AddWidgets/AddJustSay";
import AddCounter from "./AddWidgets/AddCounter";
import JustSay from "./JustSay";

export default function WidgetTools() {
  const [modalActive, setModalActive] = useState(false);
  const [modalActive1, setModalActive1] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [modalActive3, setModalActive3] = useState(false);

  const [title1, setTitle1] = useState("");
  const [listAllWidgets, setListAllWidgets] = useState([]);


  const handleClick = function () {
    setModalActive(true);
  };
  const handleCancel = function () {
    setModalActive(false);
  };

  const handleClick1 = function () {
    setModalActive1(true);
    setModalActive(false);
    setTitle1();
    // setTest1()
  };
  const handleClick2 = function () {
    setModalActive2(true);
    setModalActive(false);
  };
  const handleClick3 = function () {
    setModalActive3(true);
    setModalActive(false);
  };
  const handleCancels = function () {
    setModalActive(false);
    setModalActive1(false);
    setModalActive2(false);
    setModalActive3(false);
  };
  // const test = function () {
  //     alert(test1);
  // };
  let ct = "mx-auto text-4xl";
  //   console.log(title1, "xy");

  const handleJustsay = function () {
    if (listAllWidgets.length > 0 ) {
      console.log(listAllWidgets);
      return <JustSay title={title1} listAllWidgets={listAllWidgets} />;
    } else {
      return (
        <Card title=" ">
          <div className="text-center text-gray-400 my-8 font-light">
            <p className="text-4xl mb-2">No widgets at all </p>
            <p>
              Click{" "}
              <button
                onClick={handleClick}
                className="font-normal text-blue-400 focus:outline-none"
              >
                {" "}
                HERE{" "}
              </button>{" "}
              to add a new one
            </p>
          </div>
        </Card>
      );
    }
  };

  return (
    <div className="mb-4 space-x-1">
      <button
        onClick={handleClick}
        className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
      >
        <RiAddCircleLine className="inline-block text-xl relative -top-0.5" />{" "}
        Add Widget
      </button>
      <button className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300">
        <BiBomb className="inline-block text-xl relative -top-0.5" /> Clear all
      </button>

      <div className="pt-3.5">{handleJustsay()}</div>

      {modalActive && (
        <Modal onCancel={handleCancel}>
          {/* <WidgetsMenu /> */}
          <h2 className="text-xl undefined">Add widget</h2>
          <div className=" flex flex-wrap text-center mt-1.5 -ml-1.5">
            <WidgetsCard title="JustSay">
              <AiOutlineMessage onClick={handleClick1} className={ct} />
            </WidgetsCard>
            <WidgetsCard title="Counter">
              <RiIncreaseDecreaseLine onClick={handleClick2} className={ct} />
            </WidgetsCard>
            <WidgetsCard title="Timer">
              <IoTimerOutline onClick={handleClick3} className={ct} />
            </WidgetsCard>
          </div>
        </Modal>
      )}

      {modalActive1 && (
        <Modal onCancel={handleCancels}>
          <AddJustSay
            setTitle1={setTitle1}
            handleJustsay={handleJustsay}
            handleCancels={handleCancels}
            setListAllWidgets={setListAllWidgets}
            listAllWidgets={listAllWidgets}
          />
        </Modal>
      )}
      {modalActive2 && (
        <Modal onCancel={handleCancels}>
          {/* <AddWidgCard title="Add Counter" text="Enter the initial value ">
                        <Button color='primary'>Add</Button>
                    </AddWidgCard> */}
          <AddCounter />
        </Modal>
      )}
    </div>
  );
}
