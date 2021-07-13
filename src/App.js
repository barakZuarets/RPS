import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import {HashRouter as Router,Switch,Link , Route} from 'react-router-dom'
import StonePeperCut from './component/StonePeperCut';
import Stone from './img/even1.png'
import Pepper from './img/niyar1.png'
import Cut from './img/misparaim1.png'


function App() {
  const [img,setImg] =useState([{name:'stone' , pic:Stone},{name:'peper',pic:Pepper},{name:'cut',pic:Cut}]);
  
 var player=0;
  var comp=0;
  var playerWins=0
  var computerWins=0
  var imgStyle = {width:'100px', hight:'100px' };
  const play=(i)=>{
    player=i;
    comp=Math.floor(Math.random()*3);
    
  };
  const winner=(i)=>{
    if (i==1)
    {
      playerWins=playerWins+1; 
    }
    else
    {
      computerWins=computerWins+1;
    }
  }
  return (
    <div className="App">
      <Router>
      <Link to='/play'><img style={imgStyle} src={img[0].pic} onClick={()=>{play(0)}}/>
            <img style={imgStyle} src={img[1].pic} onClick={()=>{play(1)}}/>
            <img style={imgStyle} src={img[2].pic} onClick={()=>{play(2)}}/></Link>
        <Switch>
        
        <Route exact path='/play' component = {()=>{return <StonePeperCut winner={winner} p={playerWins} c={computerWins} comp={comp} player={player} /> } }/>
        </Switch>
        
      </Router>
      
      
    </div>
  );
}

export default App;
