import React, { useState } from 'react';
import Card from '../components/Layouts/Card'
import Modal from './Modal';
import WidgetsMenu from './WidgetsMenu';
import WidgetTools from './WidgetTools';

export default function NoWidgets() {
    const [modalActive, setModalActive] = useState(false);
    const handleClick = function () {
        setModalActive(true);
    };
    const handleCancel = function () {
        setModalActive(false);
    };
    return (
        <div>
            
            {/* {modalActive && (
                <Modal onCancel={handleCancel}>
                    <WidgetTools />
                </Modal>
            )} */}
        </div>
    )
}

