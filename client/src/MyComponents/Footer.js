import React from "react";

export const Footer = () => {
    let footerStyle = {backgroundColor:"#F7F8FC"};
  return (
    <div>
      <footer className="p-3" style={footerStyle}>
        <p className="text-center">Copyright &copy; ERPfeedback.com</p>
      </footer>
    </div>
  );
};
