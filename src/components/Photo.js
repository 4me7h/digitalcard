import React from "react";

import "./Photo.scss";

const Photo = ({photo}) => {
    return (
        <section className="photo" style={{backgroundImage: `url(${photo})`}}>
            <div className="photo__filter"></div>
        </section>
    );
}

export default Photo;