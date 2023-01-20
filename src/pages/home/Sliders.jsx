import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
//import slider1 from './Images/slider1.jpg';
//import slider2 from './Images/slider2.jpg';
//import slider3 from './Images/slider3.jpg';
//import p5 from '../../asset/Icons/sliderImages/p5.jpg';
//import p2 from '../../asset/Icons/sliderImages/p2.jpg';
//import p3 from '../../asset/Icons/sliderImages/p3.jpg';
import p5 from './Images/p5.jpg';
import p2 from './Images/p2.jpg';
import p3 from './Images/p3.jpg';


const Sliders = () => {
    return (
        <section className='flex justify-center'>
            <div className='w-3/4'>
                <Carousel>
                    <Carousel.Item>
                        <a href={""}>
                        <img
                            className="d-block rounded-xl"
                            src={p5}
                            alt="First slide"
                        /></a>
                        <Carousel.Caption>
                            <h3>Keep Ordering...</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href={""}>
                        <img
                            className="d-block rounded-xl"
                            src={p2}
                            alt="First slide"
                        /></a>
                        <Carousel.Caption>
                            <h3>We are reachable at many places</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href={""}>
                        <img
                            className="d-block rounded-xl"
                            src={p3}
                            alt="First slide"
                        /></a>
                        <Carousel.Caption>
                            <h3>visit <span className='text-white'><a href="www.easyfarm.in" className='no-underline text-white'>www.easyfarm.in</a></span></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}

export default Sliders;