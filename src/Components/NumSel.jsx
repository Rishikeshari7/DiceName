import React from 'react'
import "./NumSel.css"

const NumSel = ({setNumSel,numSel}) => {
    const arrNum=[1,2,3,4,5,6];
    // arrNum.map((val,key)=>(console.log(val," ",key)));

    const clickHandler=(val)=>{
        // console.log("I am in Num Sel",val);

        setNumSel(val);
    }
  return (
    <div className='numsel-cont'>
      
      {
        arrNum.map((val,key)=>(<div
         onClick={()=>clickHandler(val)}
          key={key} 
        //   className='box'
          className={val===numSel?"newbox box":"box"}
          >{val}</div>))
      }
    </div>
  )
}

export default NumSel
