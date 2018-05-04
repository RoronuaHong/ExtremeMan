// import "babel-polyfill";
import "core-js/es6";

import "media-match";
import "raf/polyfill";

import React from 'react';
import { render } from "react-dom";
import App from "./containers/App";

render(
    <App />,
    document.querySelector("#root")
);
