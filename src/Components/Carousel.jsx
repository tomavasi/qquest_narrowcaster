import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export const Carousel = () => {
    const numbers = [1,2,3];

    const settings = {
        dots: false,
        Infinite: true,
        arrows: false,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 10000
    }

    return (
        <div className="widget carousel">
            <h1>Carousel</h1>
            <Slider {...settings}>
                {numbers.map((item) => (
                    <p>{item}</p>
                ))}
            </Slider>
        </div>
    )
}