import React from 'react'
import impPath from '../Images/undraw_prioritise_re_r5xu.svg';
import { useNavigate } from 'react-router-dom';





export const Home = (props) => {
  let errMsg = "Activity name cannot be empty!"
  const navigate = useNavigate();
  const validate = () =>{
    if(props.title === "" || props.title === null){
      console.log(errMsg);
    }
    else{
      navigate('/feedback');
    }

  }
    // let h2Style={
    //     padding:"15px"
    // }
    let imgStyle={
        height:"250px",
        margin:"20px"
    }
    // let titleStyle={
    //     marginTop:"20px",

    // }

    let inputStyle = {
        width:"600px",
        display:"inline-flex"
    }
    // let myStyle = {
    //   color:"white",
    //   textDecoration:"none"
    // }

  return (
     
    <div className="container text-center">
        <h2>Welcome To Feedback Management Module of ERP System</h2>
   <img src={impPath} alt="svg" style={imgStyle} />
   <form autoComplete="off">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Enter the activity name to proceed further:<span >*</span></label><br />
    <input type="text" className="form-control" required name="actName" style={inputStyle} value={props.title} onChange={(e) => props.setTitle(e.target.value)} />
  </div>
  <button type="submit" className="btn btn-primary btn-sm" onClick={validate}>Next</button>
</form>

    </div>
  )
}
