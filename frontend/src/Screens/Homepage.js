import React, { useEffect } from "react";
import homebg from "../Images/homebg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Homepage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${homebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      data-aos="fade-up"
      className="hover:bg-fixed"
    >
      

      

      

      
    </div>
  );
}

export default Homepage;
