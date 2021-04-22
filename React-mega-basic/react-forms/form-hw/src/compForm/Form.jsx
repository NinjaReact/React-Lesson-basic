import React , {Component} from 'react'

class Form extends Component {
    state = {
        email : '',
        substriction  : false
    }

    handleEmail = (event) =>{
        this.setState({email : event.target.value})
    }
    handlerChekInputCheckBox = (event) =>{
        this.setState({substriction : event.target.checked})
    }

    handleSubmit = () =>{ 
        const isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)
        const isValidCheckboox = this.state.substriction

        if(!isValidEmail){
            alert('Ваш email не валидный')
            return
        }
        if(!isValidCheckboox){
            alert('You should accept all rems')
            return
        }

        this.setState({email : '' , substriction : false})
        alert('Thank you')

    }

    render(){
        const {email , substriction } = this.state
        return(
            <div>
                <input type="email" name='email' placeholder='email' value={email} onChange={this.handleEmail}/>
                <br/>
                <label>
                    <input type="checkbox" name="substriction" checked={substriction} onChange={this.handlerChekInputCheckBox}/>
                    I agree with terms and conditions
                </label>
                <br/>
                <button onClick={this.handleSubmit}>Send</button>
            </div>
        )
    }
}

export {Form}