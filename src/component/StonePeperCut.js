import React, {useState} from 'react'
import Stone from '../img/even1.png'
import Pepper from '../img/niyar1.png'
import Cut from '../img/misparaim1.png'
import CWin from '../img/misparaimWin.png'
import PWin from '../img/peperWin.png'
import SWin from '../img/rockWin.png'
import {HashRouter as Router,Switch,Link , Route} from 'react-router-dom'
export default function StonePeperCut(props) {
    const [img,setImg] =useState([{name:'stone' , pic:Stone},{name:'peper',pic:Pepper},{name:'cut',pic:Cut}]);
    
    
        const imgStyle = {
            width:'100px',
            hight:'100px'
        }
        const play = (index,temp)=>{
            
            
        if (index==temp)
        {
           return <h2>תיקו</h2>
        }
        else
        {
            if (temp==0)
            {
                if (index==1)
                {
                    props.winner(1)
                    return <h2 style={{backgroundColor:'red'}}>שחקן ניצח <br /><img style={imgStyle} src={PWin} /></h2>
                    
                }
                else
                {
                    props.winner(2)
                    return <h2 style={{backgroundColor:'blue'}}>מחשב ניצח <br /><img style={imgStyle} src={SWin} /></h2>
                    
                }
            }
            else{
                if (temp==1)
            {
                if (index==2)
                {
                    props.winner(1)
                    return <h2 style={{backgroundColor:'red'}}>שחקן ניצח <br /><img style={imgStyle} src={CWin} /></h2>
                    
                }
                else
                {
                    props.winner(2)
                    return <h2 style={{backgroundColor:'blue'}}>מחשב ניצח<br /><img style={imgStyle} src={PWin} /></h2>
                    
                }
            }
            else{
                if (index==0)
                {
                    props.winner(1)
                    return <h2 style={{backgroundColor:'red'}}>שחקן ניצח<br /><img style={imgStyle} src={SWin} /></h2>
                    
                }
                else
                {
                    props.winner(2)
                    return <h2 style={{backgroundColor:'blue'}}>מחשב ניצח<br /><img style={imgStyle} src={CWin} /></h2>
                    
                }
            }
            }
            
        }
        // 
    }
    return (
        <div>

            <h2 style={{backgroundColor:'red'}}> שחקן <img style={imgStyle} src={img[props.player].pic} /> </h2>
            <h2>{play(props.player,props.comp)} </h2>
            <h2 style={{backgroundColor:'blue'}}> מחשב <img style={imgStyle} src={img[props.comp].pic} /></h2>
            
          <p style={{fontSize:'20px'}}>
            <span style={{backgroundColor:'blue'}}>ניצחונות מחשב</span>|
            <span style={{backgroundColor:'red'}}>ניצחונות שחקן</span>
          </p>
          <p style={{fontSize:'20px'}}> 
            <span style={{backgroundColor:'red' }} >_______{props.p}_______</span>|
            <span style={{backgroundColor:'blue'}}>_______{props.c}_______</span>
          </p>
        
            
        </div>
    )
}
