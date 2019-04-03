import React, { Fragment } from "react";
//Style
import { Title, TitleStyle } from "style/Table/style";
// constants
import { Titles } from "constants/Table/const";

function Print(props) {
  return (
    <div>
      <Title arraysize={Titles.length}>
        {props.titles.map((title, ind) => (
          <TitleStyle key={ind}> {title} </TitleStyle>
        ))}
      </Title>
      <Fragment>
        {props.data.map((value, ind) => (
          <Title key={ind} arraysize={Titles.length}>
            {Object.keys(value).map(unit => (
              <div key={unit}>{value[unit]}</div>
            ))}
          </Title>
        ))}
      </Fragment>
    </div>
  );
}

export { Print };
