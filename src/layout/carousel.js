import React from "react";

export default function Carousel() {
    return (
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
            {/* Indicators */}
            <ul className="carousel-indicators">
                <li data-bs-target="#demo" data-bs-slide-to={0} className="active" />
                <li data-bs-target="#demo" data-bs-slide-to={1} />
                <li data-bs-target="#demo" data-bs-slide-to={2} />
            </ul>
            {/* The slideshow */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./img/slide_1.jpg" alt="Los Angeles" width={1300} height={500} />
                </div>
                <div className="carousel-item">
                    <img src="./img/slide_2.jpg" alt="Chicago" width={1300} height={500} />
                </div>
                <div className="carousel-item">
                    <img src="./img/slide_3.jpg" alt="New York" width={1300} height={500} />
                </div>
            </div>
            {/* Left and right controls */}
            <a className="carousel-control-prev" href="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" />
            </a>
            <a className="carousel-control-next" href="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon" />
            </a>
        </div>

    )
}