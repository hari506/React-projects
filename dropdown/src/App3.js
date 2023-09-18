import React, { Component } from 'react'

class FormData extends Component {
    clsName = '';

    constructor(props){
        super(props);
        this.state = {
            clsName: ''
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        console.log(this.state.clsName)
        this.clsName = this.state.clsName;
        this.props.handleFoucs()
    }

    render(){
        return(
            <div>
                <input type='text' onChange={(e) => this.setState({
                    clsName: e.target.value
                })}/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}


const ButtonComponent = React.forwardRef((props, ref) => {
   return <input type='text' ref={ref} />
})

const App3 = () => {
    const name1 = React.createRef()

    const handleFoucs = (e) => {
       // e.preventDefault();
        console.log(name1.current.value);
        //name1.current.focus()
    }

    return (
        <div>
           {/* <FormData handleFoucs={handleFoucs} ref={name1} /> */}
           <ButtonComponent ref={name1}> Add </ButtonComponent>
           <button onClick={handleFoucs}> Add </button>
        </div>
    )
}

export default App3
