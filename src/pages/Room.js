import React from "react";
import Board from "../Board";
// const { room_id } = useParams();

class Room extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            playNow: true,
            socketCheck: false
        }
    }

    render(){
        const {playNow, socketCheck} = this.state;
        return(
            // <h1>Welcome in ROOM</h1>
            //  ( playNow && socketCheck)?(        
                <div className='play'>
                    <Board />    
                </div>
            // ):(
            //     <div><Loading room_id={room_id}/></div>
            // )
        )
    }
}

export default Room;