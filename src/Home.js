import React from 'react';
import './App.css';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.canvasRef = React.createRef();
    this.contextRef = React.createRef();
    this.state = {
        isDrawing : false
    }
  };

  componentDidMount(){
      
    const canvas = this.canvasRef.current;
    canvas.width = window.innerWidth*2;
    canvas.height = window.innerHeight*2;
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`
    const context = canvas.getContext("2d")
    context.scale(2,2);
    context.lineCap = "round"
    context.strokeStyle = "black"
    context.lineWidth = 5
    console.log(context)
    this.contextRef.current = context;
    
  }
  
  startDraw = (event)=>{
      console.log(event)
    const {offsetX, offsetY} = event.nativeEvent
    this.contextRef.current.beginPath()
    this.contextRef.current.moveTo(offsetX,offsetY)
    this.setState({isDrawing:true});
  }

  endDraw = ()=>{
    this.contextRef.current.closePath()
    this.setState({isDrawing:false});
    
  }

  draw = (event) =>{
      if(!this.state.isDrawing){
          return
      }
    const {offsetX, offsetY} = event.nativeEvent
    this.contextRef.current.lineTo(offsetX,offsetY)
    this.contextRef.current.stroke()
    
  }

   
  render(){
    return (
        <canvas

          onMouseDown={(e)=>{this.startDraw(e)}}
          onMouseUp={this.endDraw}
          onMouseMove={(e)=>{this.draw(e)}}
          ref={this.canvasRef}
        >
        </canvas>
      );
  }
}

export default Home;
