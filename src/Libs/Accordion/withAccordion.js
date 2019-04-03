import React, { useState } from "react";
import { AccNames } from "../../constants/Accordions/AccConsts";

function WithAccordion(Component) {
  return function WithAcc(props) {
    const [activeAcc, setActiveAcc] = useState({
      ONE: false,
      TWO: false,
      THREE: false
    });

    const handleAccordionChange = AccIndex => () =>
      setActiveAcc({ ...activeAcc, [AccIndex]: !activeAcc[AccIndex] });

    const handleChangeImg = AccIndex => () =>
      activeAcc[AccIndex] === true ? "180deg" : "";

    return (
      <Component
        {...props}
        activeAcc={activeAcc}
        handleActiveAcc={handleAccordionChange}
        handleChangeImg={handleChangeImg}
      />
    );
  };
}

export { WithAccordion };
