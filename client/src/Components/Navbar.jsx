import React from 'react';
import { MdOutlineMessage } from 'react-icons/md';

const Navbar = () => {
  return (
    <>
      <div style={{
        width: "100%", 
        height: "15%",
        backgroundColor: "#48BB78",
        padding: "20px",
        fontSize: "25px",
        color: "white",
        boxShadow: "3px 3px 18px 0px rgba(173, 177, 174, 0.84)",
        display: "flex",
        alignItems: "center",
        zIndex: "9"
      }}>
        <MdOutlineMessage style={{ marginRight: "15px", 
          color: "blue", fontSize: "30px", fontWeight: "bold"
      }} />
        <h1>Chit-chat</h1>
        </div>
    </>
  );
};

export default Navbar