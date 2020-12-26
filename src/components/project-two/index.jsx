import React, { Component } from "react";
import data from "../../services/index";
import d1 from "../../assets/data.jpg";
import { default as Slide } from "react-slick";

export default class FocusOnSelect extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="container">
                <div className="slider">
                    <Slide {...settings}>{data.map((val, i) => {
                        return (
                            <div key={key} className="slider-item">
                                <div className="slide">
                                    <div className="items">
                                        <div style={{ backgroundImage: `url(${d1})` }} className="img">
                                            <h4 className="title">BIG DATA</h4>
                                            <span className="date"><i>14</i> MART</span>
                                        </div>
                                        <div className="text">
                                            <p><b>{++i}</b> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <div className="btn btn-danger">Click For Me</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </Slide>
                </div>
            </div>
        );
    }
}