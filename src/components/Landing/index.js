import React from "react";

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Mandakh"
        }
    }

    componentDidMount() {
        this.setState({
            name: "tskneg"
        })
    }

    handleButtonClick = () => {
        this.setState({
            name: "mandakh"
        })
    };

    render() {

        return (
            <div>Landing {this.state.name} <button onClick={this.handleButtonClick}>dffasfsdfas</button></div>
        )
    }
}
export default Landing;