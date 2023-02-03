import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

let curDate = new Date();
let hour = curDate.getHours();
let greeting = '';
const cssStyleBG = {};
const cssStyle = {};
if (hour>=1 && hour<12){
  greeting = 'Good Morning';
  cssStyleBG.backgroundColor = "Orange";
  cssStyle.color = "Orange";
}
else if(hour>=12 && hour<=16){
  greeting = 'Good Afternoon';
  cssStyleBG.backgroundColor = "Yellow";
  cssStyle.color = "Yellow";
}
else if(hour>16 && hour<=19){
  greeting = 'Good Evening';
  cssStyleBG.backgroundColor = "Green";
  cssStyle.color = "Green";
}
else{
  greeting = 'Good Night';
  cssStyleBG.backgroundColor = "Grey";
  cssStyle.color = "Grey";
}


ReactDOM.render(
<>
<div  style={cssStyleBG}>
<h1> Hello <span style={cssStyle}>{greeting}</span> </h1>
</div>
</>,
document.getElementById('root')
)