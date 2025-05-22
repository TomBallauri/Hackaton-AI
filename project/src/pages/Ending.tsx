import React from "react";

const backgroundStyle: React.CSSProperties = {
    width: "100vw",
    height: "100vh",
    backgroundImage: "url('/card.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const textStyle: React.CSSProperties = {
    color: "#fff",
    fontSize: "2rem",
    fontWeight: "bold",
    textShadow: "0 2px 8px rgba(0,0,0,0.7)",
    textAlign: "center",
    padding: "2rem",
    background: "rgba(0,0,0,0.3)",
    borderRadius: "16px",
};

const Ending: React.FC = () => {
    return (
        <div style={backgroundStyle}>
            <div style={textStyle}>
                Merci d'avoir participé !
            </div>
        </div>
    );
};

export default Ending;