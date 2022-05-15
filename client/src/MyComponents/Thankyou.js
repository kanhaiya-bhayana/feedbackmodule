import React from 'react'
import imgpath from "../Images/undraw_super_thank_you_re_f8bo.svg";

export const Thankyou = (props) => {
  
    let imgStyle = { height: "250px", margin: "20px" };
    let h4Style = { padding: "35px" };
  return (
    <div className="container text-center">
    <h4 style={h4Style}>Thank you for taking the time to give us your valuable feedback!</h4>
    <img src={imgpath} alt="ThankYou svg" style={imgStyle} />
</div>
  )
}
