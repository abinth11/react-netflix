import React from "react";
import ContentLoader from "react-content-loader";
import './shimmer.css'
function Shimmer() {
    return (
        <ContentLoader
        viewBox="0 0 285 160"
        speed={0.8}
        interval={0.1}
        gradientRatio={1.5}
        gradientOpacity={0.1}
        duration={2}
      >
        <rect x="10" y="5" rx="5" ry="5" width="265" height="150" />
      </ContentLoader> 
    );
}

export default Shimmer