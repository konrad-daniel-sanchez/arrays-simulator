import React, { useState } from 'react';
import Element from './Element';

function Array({arrayInput}) {
  const [array, setArray] = useState(arrayInput);

  return (
    <>
      <div className="array">
        {array.map((value, index) => (
          <div key={index}>
            <Element index={index} value={value} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Array;
