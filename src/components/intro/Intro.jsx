import "./intro.scss"
import { init } from 'ityped'
import { useEffect , useRef} from "react"

export default function Intro() {

  const textRef= useRef();

  useEffect(()=>{
    init(textRef.current , {
       showCursor: false,
       backDelay:3000,
       strings: ["Web Development","Competitive Programming","DSA" ] 
      })
  },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt=""></img>
        </div>
      </div>
      <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Rishabh Yadav</h1>
        <h3>
          Working on <span ref={textRef}></span>
          </h3>
      </div>
      {/* <a href="#portfolio">
        <img src="assets/downarrow.png" alt=""/>
      </a> */}
    </div>
    </div>
  )
}
