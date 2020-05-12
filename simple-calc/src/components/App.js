import React, { useState } from 'react';
import Calculator from './Calculator';

export default function App({ initialData }) {
  const [total, setTotal] = useState(0);
  const updateTotal = (runningTotal) => {
    setTotal(runningTotal);
  };
  return (
    <>
      <div className="header">{initialData.appName}</div>
      <div className="result">Total: {total}</div>
      <Calculator onSubmit={updateTotal} />
    </>
  );
}
