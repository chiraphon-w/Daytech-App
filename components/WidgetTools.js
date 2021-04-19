import React, { useState } from "react";
import Modal from "../components/Modal";
import { RiAddCircleLine, RiIncreaseDecreaseLine } from "react-icons/ri";
import { BiBomb } from "react-icons/bi";

import WidgetsCard from "./Layouts/WidgetsCard";
import { AiOutlineMessage } from "react-icons/ai";
import { IoTimerOutline } from "react-icons/io5";

import Card from "./Layouts/Card";
import AddJustSay from "./AddWidgets/AddJustSay";
import AddCounter from "./AddWidgets/AddCounter";
import JustSay from "./JustSay";
import Button from "./Buttons/Button";

export default function WidgetTools() {
  const [modalActiveMenu, setModalActiveMenu] = useState(false);
  const [modalActiveJustSay, setModalActiveJustSay] = useState(false);
  const [modalActiveCounter, setModalActiveCounter] = useState(false);

  const [justSay, setJustSay] = useState("");
  const [listAllWidgets, setListAllWidgets] = useState([]);

  const handleClick = function () {
    setModalActiveMenu(true);
  };
  const handleClick1 = function () {
    setModalActiveJustSay(true);
    setModalActiveMenu(false);
    setJustSay();
  };
  const handleClick2 = function () {
    setModalActiveCounter(true);
    setModalActiveMenu(false);
  };
  const handleClick3 = function () {
    setModalActiveMenu(false);
  };
  const handleCancel = function () {
    setModalActiveMenu(false);
    setModalActiveJustSay(false);
    setModalActiveCounter(false);
  };

  let d = new Date();
  let ye = new Intl.DateTimeFormat("en", { year: "2-digit" }).format(d);
  let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
  let hms = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(d);

  const realTime = `Added on ${mo} ${da}, ${ye}, ${hms}`;

  let ct = "mx-auto text-4xl";
  let disabled = true;

  const handleJustsay = function () {
    if (listAllWidgets.length > 0) {
      console.log(listAllWidgets);
      return <JustSay title={justSay} listAllWidgets={listAllWidgets} />;
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
      <Button doClick={handleClick} disabled={!disabled}>
        <RiAddCircleLine className="inline-block text-xl relative -top-0.5" /> Add Widget
      </Button>
      {/* <button
        onClick={handleClick}
        className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600"
      >
        <RiAddCircleLine className="inline-block text-xl relative -top-0.5" />{" "}
        Add Widget
      </button> */}

      <Button disabled={disabled}>
        <BiBomb className="inline-block text-xl relative -top-0.5" /> Clear all
      </Button>
      {/* <button className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300">
        <BiBomb className="inline-block text-xl relative -top-0.5" /> Clear all
      </button> */}

      <div className="pt-3.5">{handleJustsay()}</div>

      {modalActiveMenu && (
        <Modal onCancel={handleCancel}>
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

      {modalActiveJustSay && (
        <Modal onCancel={handleCancel}>
          <AddJustSay
            setJustSay={setJustSay}
            handleJustsay={handleJustsay}
            handleCancel={handleCancel}
            setListAllWidgets={setListAllWidgets}
            listAllWidgets={listAllWidgets}
            realTime={realTime}
          />
        </Modal>
      )}
      {modalActiveCounter && (
        <Modal onCancel={handleCancel}>
          <AddCounter />
        </Modal>
      )}
    </div>
  );
}
