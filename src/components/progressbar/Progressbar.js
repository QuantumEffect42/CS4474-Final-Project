import React, { useEffect } from "react";
import "./Progressbar.css";

function ProgressBar() {
    const [width, setWidth] = React.useState(0);


    const scrollHeight = () => {
        var element = document.documentElement,
        ScrollTop = element.scrollTop || document.body.scrollTop,
        ScrollHeight = element.scrollHeight || document.body.scrollHeight;

        var percent = (ScrollTop / (ScrollHeight - element.clientHeight)) * 100;
        setWidth(percent);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", scrollHeight);
        return () => window.removeEventListener("scroll", scrollHeight);
      });

    return <div className={`progress-bar`} style={{ width: width + "%" }}></div>;
}
export default ProgressBar;
