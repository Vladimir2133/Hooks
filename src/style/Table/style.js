import styled from "styled-components";

const Title = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.arraysize}, minmax(80px, 1fr));
  grid-column-gap: 10px;
  grid-row-gap: 1em;
  word-wrap: break-word;
  margin-right: 20px;

  div {
    border: 1px solid black;
    margin: 4px;
    padding: 12px;
  }
`;

const TitleStyle = styled.div`
  background-color: #ffff00;
`;
export { Title, TitleStyle };
