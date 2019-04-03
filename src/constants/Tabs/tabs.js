import React from "react";

const tabNames = {
  FIRST: "FIRST",
  SECOND: "SECOND",
  THIRD: "THIRD"
};

const tabs = [
  { title: "Accordion", tabIndex: tabNames.FIRST },
  { title: "Table", tabIndex: tabNames.SECOND },
  { title: "Tab Three", tabIndex: tabNames.THIRD }
];

export { tabNames, tabs };
