import React from "react";

import "./Photo.scss";

const Photo = ({photo}) => {
    return (
        <section class="photo" style={{backgroundImage: `url(${photo})`}}>
        </section>
    );
}

export default Photo;