import React from 'react';

export default function AddRealTime({}) {

    let d = new Date();
    let ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    let hms = new Intl.DateTimeFormat('en', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(d);

    let realTime = (`Added on ${mo} ${da}, ${ye}, ${hms}`);

    return (
        <div className="text-xs text-gray-400">
            <div className="mt-6 -mb-2 text-center">
                {realTime}
            </div>
        </div>
    );
}
