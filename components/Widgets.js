import React, { useState } from "react";
import JustSay from "./JustSay";
import Timer from "./Timer";
import Counter from "./Counter";
import WidgetTools from "./WidgetTools";
import NoWidgets from "./NoWidgets";
import Modal from "./Modal";
import AddJustSay from "../components/AddWidgets/AddJustSay";
import WidgetsMenu from "../components/WidgetsMenu";
import Test from "./NavBar/Test";

export default function Widgets() {
    const widgetsA = [
    <JustSay key="13123123" />,
    <Counter key="3235235" />,
    <Timer key="0987876" />,
  ];
  return (
    <>
      <h2 className="text-xl">Widgets</h2>
      <div className="pt-3">
        <div className="mb-4">
          <WidgetTools />
          <div className="md:flex md:flex-wrap md:-mr-4">
            {/* <JustSay />
            <Counter /> 
            <Timer />*/}
          </div>
        </div>
      </div>
    </>
  );
}


