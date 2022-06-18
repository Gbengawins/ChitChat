import React from 'react';
import { IoLogoEdge } from 'react-icons/io5';

const Navbar = () => {
  return (
    <>
      <div style={{
        width: "100%", 
        height: "15%",
        backgroundColor: "lightblue",
        padding: "20px",
        fontSize: "25px",
        color: "white",
        boxShadow: "3px 3px 18px 0px rgba(173, 177, 174, 0.84)",
        display: "flex",
        alignItems: "center",
        zIndex: "9"
      }}>
        <IoLogoEdge style={{ marginRight: "15px", 
          color: "gray", fontSize: "30px", fontWeight: "bold"
      }} />
        <h1>Happy Chit-Chatting</h1>
        </div>
    </>
  );
};

export default Navbar