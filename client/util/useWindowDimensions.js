import { useState, useEffect } from "react"

function getWindowDimensions() {
    if (typeof window !== "undefined") {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensinos] = useState(getWindowDimensions());
    
    useEffect(() => {
        function handleResize() {
            setWindowDimensinos(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
}
