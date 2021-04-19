import React from 'react';

export default function Card({ title, children }) {

  let d = new Date();
  let ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(d);
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  let hms = new Intl.DateTimeFormat('en', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(d);

  let realTime = (`Added on ${mo} ${da}, ${ye}, ${hms}`);

  return (
      
      <div className="md:inner md:w-1/2 pb-4 md:pr-4">
        <div className='p-5 border-1 bg-white rounded-2xl'>
          <h2 className='text-lg font-bold text-gray-400 mb-1.5'>{title}</h2>
          {children}
        </div>
      </div>
  );
}
