import React from 'react'

export default class App6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date()
        }
    }

    componentDidMount() {
        this.timmerId = setInterval(
            () => this.changeTimer(),
            1000
        );
    }

    componentDidUpdate(preVprops, prevState, snapshot){
        console.log('the time is ', this.state.currentTime.toLocaleTimeString())
    }

    componentWillUnmount() {
        clearInterval(this.timmerId)
    }

    changeTimer() {
        this.setState({
            currentTime: new Date()
        })
    }

    render() {
        return (
            <div> the Time Is : {this.state.currentTime.toLocaleTimeString()}</div>
        )
    }
}