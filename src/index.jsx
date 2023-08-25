import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import App from './App';
import "./index.css";

const Body = styled.body`
  font-family: 'Montserrat', sans-serif;
`

ReactDOM.render(
  <React.StrictMode>
    <Body>
      <App />
    </Body>
  </React.StrictMode>,
  document.getElementById("root")
);
