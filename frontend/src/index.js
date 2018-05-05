// import "babel-polyfill";
import "core-js/fn/map";
import "core-js/fn/weak-map";
import "core-js/fn/set";
import 'core-js/fn/object/assign';
import "core-js/fn/object/set-prototype-of";
// import "core-js/fn/weak-set";
import "media-match";
import "raf/polyfill";

import React from "react";
import { render } from "react-dom";
import App from "./containers/App";

render(
    <App />,
    document.querySelector("#root")
);
