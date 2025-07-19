import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // This scrolls to the top on every route change
    }, [location]);

    return null;
};

export default ScrollToTop;