import React, { useState } from 'react';

const Tooltip = ({ children, render }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div onMouseOver={() => setIsVisible(true)} onMouseOut={() => setIsVisible(false)} style={{ position: 'relative', display: 'inline-block' }}>
      {isVisible && (
        <div style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', margin: '5px', padding: '5px', backgroundColor: 'lightgray', border: '1px solid black', borderRadius: '5px', zIndex: '100' }}>
          {render()}
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
