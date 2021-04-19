import React, { useState } from 'react';
import Card from '../Layouts/Card'


export const Test1 = () => {
    const [eee, setEee] = useState(0);
    return (
        <Card title="JustSay">
            <div className="text-center my-8">{eee}
                <h1 className="text-4xl font-bold">{"HALOOOO :)"}</h1>
            </div>
        </Card>
    )
}

export const Test2 = ({test1}) => {
    // const [eee, setEee] = useState(0);
    return (
        <div className="mb-4 space-x-1">
        <button onClick={handleClick} className="text-white focus:outline-none px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600">
            <RiAddCircleLine className="inline-block text-xl relative -top-0.5" /> Add Widget</button>
        <button className="text-white focus:outline-none px-4 py-1 rounded-md bg-gray-300">
            <BiBomb className="inline-block text-xl relative -top-0.5" /> Clear all</button>
            </div>
    )
}