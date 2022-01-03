import React from "react";
import "./Dashboard.css"
class Dashboard extends React.Component{
    constructor(){
        super()
        this.state = {
            user: "",
            room_id : "",
            error: ""
        }
    }
    joinRoom = ()=>{

    }

    genereateUniqueID = ()=>{

    }
    render(){
        const {user,error,room_id} = this.state
        
        return(
            <div className="home-container">
                Hello World {user ? user.name : ''} 😀
                <div className="error" style={{display: !error?'none':'flex'}} >{error}</div>
                <form onSubmit={this.joinRoom} id="room-form">
                    <input
                        type="text"
                        value={room_id}
                        onChange={e => { this.setState({error:''}); this.setState({room_id:e.target.value})}}
                        id="join Room"
                        placeholder='Enter Room ID' />
                    <button className="input-button">Join Room</button>
                </form>            
                <div>OR</div>
                <button className="input-button" onClick={this.genereateUniqueID}>Create Room</button>
            </div>
        )
    }
}

export default Dashboard