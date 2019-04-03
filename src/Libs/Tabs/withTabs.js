import React, { useState } from "react";
//import React, {Component} from "react";
import { tabNames } from "../../constants/Tabs/tabs";

function WithTabs(props) {
  const [activeTab, setActiveTab] = useState(tabNames.FIRST);

  const handleTabChange = tabName => () => setActiveTab(tabName);

  const activeColor = tabIndex => () =>
    activeTab === tabIndex ? "#1E90FF" : " ";

  return (
    <div>
      {props.children({
        activeTab: activeTab,
        setActiveTab: handleTabChange,
        color: activeColor
      })}
    </div>
  );
}

export { WithTabs };
