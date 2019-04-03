import React, { Component } from "react";

import { WithAccordion } from "Libs/Accordion/withAccordion";
//constans
import { AccNames, Acc } from "constants/Accordions/AccConsts";
//component
import { FirstAccardion } from "components/Accordion/FirstAccardion";
import { SecondAccardion } from "components/Accordion/SecondAccardion";
import { ThirdAccardion } from "components/Accordion/ThirdAccardion";
//styles
import {
  AccStyle,
  AccButton,
  AccContent,
  IconAcc
} from "style/AccordionStyles/AccardionStyle";

const Content = "simple text";
const Accordion = ({ activeAcc, handleActiveAcc, handleChangeImg }) => (
  <div>
    {Acc.map(({ title, AccIndex }, ind) => (
      <AccStyle key={ind}>
        <AccButton onClick={handleActiveAcc(AccIndex)}>
          {title}
          <IconAcc imgactive={handleChangeImg(AccIndex)}> </IconAcc>
        </AccButton>
        <AccContent>
          {activeAcc[AccIndex] && AccIndex === "ONE" && (
            <FirstAccardion text={Content} />
          )}
          {activeAcc[AccIndex] && AccIndex === "TWO" && <SecondAccardion />}
          {activeAcc[AccIndex] && AccIndex === "THREE" && <ThirdAccardion />}
        </AccContent>
      </AccStyle>
    ))}
  </div>
);

export default WithAccordion(Accordion);
