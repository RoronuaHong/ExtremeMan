import React, { Component } from "react";
import { Flex } from 'antd-mobile';
import Index from "./Index";

import "whatwg-fetch";
import "../styles/scss/common/reset";
// import "lib-flexible";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialState: 0,
            postData: 0
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/aa")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    initialState: data.abc
                });
            });
    }

    render() {
        const { Item } = Flex;

        return(
            <div className="flex-container">
                <Flex>
                    <Index />
                </Flex>
            </div>
        )
    }
}

export default App;
