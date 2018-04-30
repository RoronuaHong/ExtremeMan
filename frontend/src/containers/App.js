import React, { Component } from "react";
import { Flex, WhiteSpace, Button } from 'antd-mobile';

import "whatwg-fetch";
import "../styles/scss/common/reset.css";

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
        
        fetch("http://localhost:3000/abc", {
            method: "POST",
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: 1,
                tel: 18606977713
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // this.setState({
                //     postData: data.abc
                // });
            });
    }

    render() {
        const { Item } = Flex;

        return(
            <div className="flex-container">
                <Flex>
                    <Item>Block</Item>
                    <Item>
                        <div>{ this.state.initialState }</div>
                        <div>{ this.state.postData }</div>
                    </Item>
                    <Item>
                        <Button type="primary">1111</Button>
                    </Item>
                    <Item>
                        123
                    </Item>
                </Flex>
            </div>
        )
    }
}

export default App;
