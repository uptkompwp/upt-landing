import React from "react";
import MetaBalls from "../MetaBalls";

export default function Loading() {
    return (
        <div className="relative w-full h-screen flex items-center justify-center bottom-10">
            <div className="w-full h-full">
                <MetaBalls
                    color="#00ffff"
                    cursorBallColor="#00ffff"
                    cursorBallSize={2}
                    ballCount={15}
                    animationSize={30}
                    enableMouseInteraction={true}
                    enableTransparency={true}
                    hoverSmoothness={0.05}
                    clumpFactor={1}
                    speed={0.3}
                />
            </div>

            <p className="absolute text-3xl text-white font-semibold">Loading...</p>
        </div>
    );
}
