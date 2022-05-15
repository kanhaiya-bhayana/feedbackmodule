import React from 'react'
import imgPath from '../Images/undraw_about_us_page_re_2jfm.svg'

export const About = () => {
    let divStyle={display: "inline-flex"};
    let pStyle= {margin:"17.5px",textAlign: "justify",textJustify: "inter-word"};
    let h3Style = {padding: "15px"};
    let imgStyle = {display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
    marginBottom: "20px",
    width: "30%"};
  return (
    
<div className="container">
        <h3 style={h3Style}>About Us</h3>
        <div style={divStyle}>

        <img src={imgPath} style={imgStyle}  alt="SVG" />
        <p style={pStyle}><b>Lorem</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br />
  <br />
  <b>Lorem</b>
       Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
        </p>
       

        </div>
         <p style={pStyle}><b>Lorem</b> Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
        </p>      
        
    </div>
  )
}
