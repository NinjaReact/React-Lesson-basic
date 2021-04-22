import React , {Component} from 'react'

class FormRef extends Component {
    constructor(){
        super();
        this.state = {
            card : '',
            email : '',

        }
        this.cardRef = React.createRef()
        this.emailRef = React.createRef()
    }

    handleChangeInput = (event) =>{
        this.setState(()=>({[event.target.name] : event.target.value}) , ()=>{
            if(this.state.card.length === 16){
                this.emailRef.current.focus()
            }
        })
    }

    componentDidMount(){
        this.cardRef.current.focus()
    }

    render(){
        const {card , email} = this.state
        return(
            <div>
                <input type="text" name="card" placeholder='card' value={card} onChange={this.handleChangeInput} ref={this.cardRef}/>
                <input type="email" name="email" placeholder='email' value={email} onChange={this.handleChangeInput} ref={this.emailRef}/>
            </div>
        )
    }
}
export {FormRef}