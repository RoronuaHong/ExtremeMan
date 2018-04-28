import React, { Component } from "react";
import "whatwg-fetch";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialState: 0,
            postData: 0
        }
    }

    componentDidMount() {
        fetch("http://192.168.0.169:3000/aa")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    initialState: data.abc
                });
            });

        // fetch("http://192.168.0.169:3000")
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //     });
        
        fetch("http://192.168.0.169:3000/abc", {
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
        return(
            <React.Fragment>
                <div>{ this.state.initialState }</div>
                <div>{ this.state.postData }</div>
            </React.Fragment>
        )
    }
}

export default App;
