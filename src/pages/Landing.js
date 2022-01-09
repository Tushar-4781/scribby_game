import React from "react"
import "./Landing.css"
import { withRouter } from "react-router-dom";

class Landing extends React.Component{
    constructor(){
        super()

        this.state = {
            name: ""
        }
    }
    setName = (e)=>{
        this.setState({name:e})
    }

    registerMe = (e)=>{
        e.preventDefault();
        if (this.state.name) {
            console.log(this.state.name);
            
            //Generating unique id for each User
            var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
                'h', 'i', 'j', 'k', 'l', 'm', 'n',
                'o', 'p', 'q', 'r', 's', 't', 'u',
                'v', 'w', 'x', 'y', 'z' , '1', '2',
                 '3', '4', '5', '6', '7', '8', '9' , '0'];

            let result = "";
            for (let index = 0; index < 15; index++) {
                if (index === 5 || index === 10 ){
                    result += '-'
                }else
                    result += alphabet[Math.floor(Math.random() * 10000) % 35];
            }

            const newUser = {
                "name":this.state.name,
                "id":result
            }
            localStorage.setItem('user', newUser)
            // cookies.set('user', newUser , { path: '/' });
            this.setState({name:newUser});
            this.props.history.push("/room/123");

        }
    }
    componentDidMount(){
        const name = localStorage.getItem('user')
        if (name !== null && name !== undefined ){
            console.log(name);
            // return <Redirect to="/"/>
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.registerMe} id="room-form">
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={e => { this.setName(e.target.value) }}
                        id="Name"
                        placeholder='Enter Your Name' />
                    <button className="input-button">Join Room</button>
                </form>
            </div>
        )
    }
}
export default withRouter(Landing);