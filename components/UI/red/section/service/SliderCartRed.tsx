import React from 'react'
import Slider from "react-slick";
import CardRed from './CardRed';
export default function SliderCartRed({ }) {

    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "110px",
        slidesToShow: 3,
        // speed: 800,
        // autoplay: true,
        autoplaySpeed: 3800,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
        <div className="slider-container px-12  cart">
            <Slider  {...settings} className="services-slider">
                <CardRed img='/assets/img/servicesMonitoring.png' title='Wdrożenia komercyjne i Open Source ' text="Wykrywanie anomalii i analiza maszynowa / ludzka 24/7/365"
                         button="Zobacz więcej" />
                <CardRed img='/assets/img/servicesMonitoring.png' title='Szkolenia z zakresu cyberbezpieczeństwa ' text="Skanowanie nowych podatności i / lub testy penetracyjne"
                         button="Zobacz więcej" />
                <CardRed img='/assets/img/servicesMonitoring.png' title='Monitorowanie infrastruktury w trybie ciągłym / SOC' text="Kontrolowane ataki phishingowe na pracowników"
                         button="Zobacz więcej" />
                <CardRed img='/assets/img/servicesMonitoring.png' title='II linia wsparcia technicznego ' text="Kontrolowane ataki phishingowe na pracowników"
                         button="Zobacz więcej" />
                <CardRed img='/assets/img/servicesMonitoring.png' title='odmiejscowienie kopi zapasowych' text="Kontrolowane ataki phishingowe na pracowników"
                         button="Zobacz więcej" />
            </Slider>
        </div>
    )
}
