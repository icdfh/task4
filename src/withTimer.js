import React, { useState, useEffect } from 'react';

const withTimer = (WrappedComponent) => {
  return (props) => {
    const [timeSpent, setTimeSpent] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    return <WrappedComponent timeSpent={timeSpent} {...props} />;
  };
};

export default withTimer;
