import React from 'react'
import imgpath from "../Images/undraw_cancel_re_pkdm.svg";
import { Link } from "react-router-dom";



export const Error = () => {
    let imgStyle = { height: "250px", padding: "30px" };
    let h4Style = { padding: "20px" };
    let linkStyle = {textDecoration:"none",color:"white"};
  return (
    <div className="container text-center">
      <img src={imgpath} alt="Warning  svg" style={imgStyle} />
      <h2>4XX </h2>
      <h4 style={h4Style}>An error occured, Try Agin</h4>
      <button className="btn btn-primary btn-sm"><Link style={linkStyle} to={'/'}>Try Again</Link></button>
    </div>
  )
}
