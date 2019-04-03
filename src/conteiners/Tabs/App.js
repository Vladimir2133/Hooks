import React, { Component, Fragment } from "react";
//import React, {useState} from 'react';

import { WithTabs } from "Libs/Tabs/withTabs";
//Components
import { Print } from "components/Table/PrintData";
import { FirstTab } from "components/tabs/FirstTab";
import { SecondTab } from "components/tabs/SecondTab";
import { ThirdTab } from "components/tabs/ThirdTab";
//constants
import { tabNames, tabs } from "constants/Tabs/tabs";
import { Titles, TitleArray } from "constants/Table/const";
//Accardion
import Accardion from "conteiners/Accordion/Accardion";
//style
import { Tabs, ButtonStyle, TabContent } from "style/TabsStyles/style";
import { Title, TitleStyle } from "style/Table/style";

const App = () => (
  <div>
    <WithTabs>
      {({ activeTab, setActiveTab, color }) => (
        <Fragment>
          <Tabs>
            {tabs.map(({ title, tabIndex }, ind) => (
              <ButtonStyle
                key={ind}
                onClick={setActiveTab(tabIndex)}
                backgcolor={color(tabIndex)}
              >
                {title}
              </ButtonStyle>
            ))}
          </Tabs>
          <TabContent>
            {activeTab === tabNames.FIRST && <Accardion />}
            {activeTab === tabNames.SECOND && (
              <Print titles={Titles} data={TitleArray} />
            )}
            {activeTab === tabNames.THIRD && <ThirdTab />}
          </TabContent>
        </Fragment>
      )}
    </WithTabs>
  </div>
);

export default App;
