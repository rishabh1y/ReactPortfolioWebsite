import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="myacademics" id="myacademics">
      <h1>My Skills</h1>
      <div className="skill">
        <div className="skill1"><h2>Java</h2>
        <div className="outer">
          <div className="inner">
            <div id="number">
              75%
            </div>
          </div>
        </div>
        <div className="circleclr">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="500px" height="500px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="90" cy="90" r="80" stroke-linecap="round" />
 </svg>
 </div>
 </div>


 <div className="skill2"><h2>Javascript</h2>
        <div className="outer">
          <div className="inner">
            <div id="number">
              70%
            </div>
          </div>
        </div>
        <div className="circleclr">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="500px" height="500px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="90" cy="90" r="80" stroke-linecap="round" />
 </svg>
 </div>
 </div>


 <div className="skill4"><h2>ReactJS</h2>
        <div className="outer">
          <div className="inner">
            <div id="number">
              50%
            </div>
          </div>
        </div>
        <div className="circleclr">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="500px" height="500px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="90" cy="90" r="80" stroke-linecap="round" />
 </svg>
 </div>
 </div>



 <div className="skill5"><h2>BackEnd</h2>
        <div className="outer">
          <div className="inner">
            <div id="number">
              35%
            </div>
          </div>
        </div>
        <div className="circleclr">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="500px" height="500px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="90" cy="90" r="80" stroke-linecap="round" />
 </svg>
 </div>
 </div>



 <div className="skill3"><h2>HTML,CSS</h2>
        <div className="outer">
          <div className="inner">
            <div id="number">
              90%
            </div>
          </div>
        </div>
        <div className="circleclr">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="500px" height="500px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="90" cy="90" r="80" stroke-linecap="round" />
 </svg>
 </div>
 </div>


      </div>
    </div>
  )

//   let number = document.getElementById("number");
//   let ctr=0;
//   setInterval(() => {
//     if(ctr===65){
//       clearInterval();
//     }
//     else{
//       ctr+=1;
//       number.innerHTML = ctr+"%";
//     }
//   },30);
}
