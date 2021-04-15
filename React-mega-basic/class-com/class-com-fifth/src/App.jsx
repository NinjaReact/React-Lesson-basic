import React, {Component} from 'react'
import './App.css'
class App extends Component {
    state ={
        count: 0,
        isCounting : false
    }
    

    handleStart = () =>{    
        this.setState({isCounting : true})
        this.timerId = setInterval(()=> {
                this.setState({count : this.state.count + 1})
        } , 1000)
    }
    
    handleStop = () =>{
        this.setState({isCounting : false})
        clearInterval(this.timerId)
    }

    hendleReset= ()=>{
        this.setState({count : 0 , isCounting : false})
        clearInterval(this.timerId)
    }

    componentDidMount(){
        const userCount = localStorage.getItem('timer')
        if(userCount) {
            this.setState({count : +userCount})
        }
    }

    componentDidUpdate(){
        localStorage.setItem('timer' , this.state.count)
    }

    componentDidUnmount(){
        clearInterval(this.timerId)
    }
    render(){
        return(
            <div className='timer'>
                <h3>React Timer</h3>
                <h1>{this.state.count}</h1>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.hendleReset}>Reset</button>
            </div>
        )
    }
}

export default App
