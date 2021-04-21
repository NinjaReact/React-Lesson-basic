import React , {Component} from 'react'

class Form extends Component {
    state = {
        firstName : '',
        email : '',
        message : '',
        select : '' ,
        substriction : false,
        gender : ''
    }

    handleChange = (event) =>{
        this.setState({[event.target.name] : event.target.value})
    }

    handleCheckboxChange = (event) =>{
        this.setState({[event.target.name] : event.target.checked})
    }

    render(){
        const {email , firstName , message , select , substriction , gender} = this.state
        return(
            <div>
                <input type="text" name="firstName" placeholder='firstName' value={firstName} onChange={this.handleChange}/>
                <input type="text" name="email" placeholder='email' value={email} onChange={this.handleChange}/>
                <br/>
                <textarea name="message" value={message} onChange={this.handleChange}></textarea>
                <br/>
                <select name="select" value={select} onChange={this.handleChange}>
                    <option value="" disabled></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <br/>
                <label >
                    <input type="checkbox" name="substriction" checked={substriction} onChange={this.handleCheckboxChange} />
                    Substriction
                </label>
                <br/>
                <input type="radio" name="gender" value='male' onChange={this.handleChange} checked={gender === 'male'} /> male
                <input type="radio" name="gender" value='female' onChange={this.handleChange} checked={gender === 'female'} />female
            </div>
        )
    }
}
export {Form}