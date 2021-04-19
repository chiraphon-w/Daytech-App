import React, { useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoTimerOutline } from 'react-icons/io5';
import { RiIncreaseDecreaseLine } from 'react-icons/ri';
import AddJustSay from './AddWidgets/AddJustSay';
import JustSay from './JustSay';
import WidgetsCard from './Layouts/WidgetsCard';
import Modal from './Modal';
import Timer from './Timer';
import AddWidgCard from './Layouts/AddWidgCard';
import Button from './Buttons/Button';

export default function WidgetsMenu() {
    const [modalActive, setModalActive] = useState(false);
    const [modalActive1, setModalActive1] = useState(false);
    const [modalActive2, setModalActive2] = useState(false);
    const [modalActive3, setModalActive3] = useState(false);

    const handleClick = function () {
        setModalActive(true);
    };
    const handleCancel = function () {
        setModalActive(false);
    };

    const handleClick1 = function () {
        setModalActive1(true);
        setModalActive(false);
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
    const test = function () {
        alert('yooooooo');
    };
    // console.log('widget work');

    let ct = "mx-auto text-4xl";
    return (
        <div>
            {/* <h2 className="text-xl undefined">Add widget</h2>
            <div className=" flex flex-wrap text-center mt-1.5 -ml-1.5">
                <WidgetsCard title="JustSay"><AiOutlineMessage onClick={handleClick1} className={ct} /></WidgetsCard>
                <WidgetsCard title="Counter"><RiIncreaseDecreaseLine onClick={handleClick2} className={ct} /></WidgetsCard>
                <WidgetsCard title="Timer"><IoTimerOutline onClick={handleClick3} className={ct} /></WidgetsCard>
            </div>

            {modalActive1 && (
                <Modal onCancel={handleCancel}>
                    <AddWidgCard title="Add Justsay" text="Enter text">
                        <Button color='primary'>Add</Button>
                    </AddWidgCard>
                </Modal>
            )}
            {modalActive2 && (
                <Modal onCancel={handleCancel}>
                    <AddWidgCard title="Add Counter" text="Enter the initial value ">
                        <Button color='primary'>Add</Button>
                    </AddWidgCard>
                </Modal>
            )}
   */}

            {modalActive && (
                <Modal onCancel={handleCancel}>
                    {/* <WidgetsMenu /> */}
                    <h2 className="text-xl undefined">Add widget</h2>
                    <div className=" flex flex-wrap text-center mt-1.5 -ml-1.5">
                        <WidgetsCard title="JustSay"><AiOutlineMessage onClick={handleClick1} className={ct} /></WidgetsCard>
                        <WidgetsCard title="Counter"><RiIncreaseDecreaseLine onClick={handleClick2} className={ct} /></WidgetsCard>
                        <WidgetsCard title="Timer"><IoTimerOutline onClick={handleClick3} className={ct} /></WidgetsCard>
                    </div>
                </Modal>
            )}

            {modalActive1 && (
                <Modal onCancel={handleCancels}>
                    <AddWidgCard title="Add Justsay" text="Enter text">
                        <Button onClick={test} color='primary'>Add</Button>
                    </AddWidgCard>
                </Modal>
            )}
            {modalActive2 && (
                <Modal onCancel={handleCancels}>
                    <AddWidgCard title="Add Counter" text="Enter the initial value ">
                        <Button color='primary'>Add</Button>
                    </AddWidgCard>
                </Modal>
            )}

        </div>
    )
}

