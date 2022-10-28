import { useState } from "react";
import "./work.scss"

export default function Works() {
const [currentSlide,setCurrentSlide] = useState(0)
const data = [

  {
    id :"1",
    title: "Candy Crush",
    desc: "A Game Website where you can have fun and play candy crush , created using ReactJS",
    img: <img src="assets/candycrush.png" alt="" /> ,
    
  },
  
  {
    id: "2",
    title: "Dice Game",
    desc: "Dice game made using HTML, CSS and Javascript",
    img: <img src="assets/dice.png" alt="" />,
  },
  {
    id: "3",
    title: "Clock",
    desc: "A simple Analog Clock which shows Time and made with pure html,css and js",
    img: <img src="assets/clock.png" alt="" />,
  },

  
  {
    id :"4",
    title: "Calculator",
    desc: "This website is a calculator i.e You can use it for daily life simple calculations ",
    img: <img src="assets/calc.png" alt="" /> ,
    
  }
  
];

const handleClick=(way)=>{
  way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 1 ) : 
  setCurrentSlide(currentSlide<data.length -1  ? currentSlide +1 :0)
 }






  return (
    <div className="works" id="works">
          

      <div className="slider"
       style={{transform: `translateX(-${currentSlide*100}vw)`}}
       >
     {  data.map((d) => (
      <div className="container">
        <div className="item">
        <div className="left">
          <div className="leftContainer">
            <h2>{d.title}</h2>
            <p>{d.desc}</p>
          <span>Projects</span>
          </div>
        </div>
        <div className="right">
          {d.img}
        </div>

        </div>
        
      </div>))}
      </div>
      <img src="assets/rlarrow.png" className="rlarrow left" alt="/" onClick={()=>handleClick("left")} />
      <img src="assets/rlarrow.png" className="rlarrow right" alt="/" onClick={()=>handleClick("right")} />

    </div>
  )
}
