import React, { useEffect, useState } from "react";

const Clock = () => {
  const [hTime, setHTime] = useState(0);
  useEffect(() => {
    let timeI = setInterval(() => {
      setHTime(hTime + 1);
      console.log("toto");
    }, 1000);
    return () => {
      clearInterval(timeI);
    };
  }, [hTime]);
  useEffect(() => {
    console.log("Htime a changé");
  }, [hTime]);

  return <div>{hTime}</div>;
};

export default Clock;
