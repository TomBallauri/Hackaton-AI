import React from "react";

const Ending: React.FC = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/image/card.png')" }}>
            <div className="text-white text-2xl font-bold text-center p-8 bg-black/30 rounded-2xl shadow-lg">
                Merci d'avoir participé !
            </div>
        </div>
    );
};

export default Ending;
