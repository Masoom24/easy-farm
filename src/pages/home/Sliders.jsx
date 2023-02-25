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
// import p1 from './Images/chaff-cutter2.jpg';
import p1 from './Images/chaff-cutter.webp';
import p4 from './Images/Power-Tiller.webp';
import p6 from './Images/Rice-Mill.webp';
import s1 from './Images/SliderImg1.png';
import s2 from './Images/SliderImg2.png';
import s3 from './Images/SliderImg3.png';
import s4 from './Images/SliderImg4.png';


const Sliders = () => {
    return (
        <section className='flex justify-center'>
            <div className='w-3/4'>
                <Carousel>
                    {/* <Carousel.Item>
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
                    </Carousel.Item> */}
                    {/* <Carousel.Item>
                        <a href={""}>
                        <img
                            className="d-block rounded-xl"
                            src={p4}
                            alt="First slide"
                            style={{ width: "50%", height: "50%" }}
                        /></a>
                        <div >
                        <Carousel.Caption >
                            <h3><span style={{float:"right" }} className='text-black'>Keep Ordering...</span></h3>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href={""}>
                        <img
                            className="d-block rounded-xl"
                            src={p6}
                            alt="First slide"
                            style={{ width: "40%", height: "60%" }}
                        /></a>
                        <div >
                        <Carousel.Caption >
                            <h3><span style={{float:"right" }} className='text-black'>We are reachable at many places</span></h3>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href={""}>
                        <img
                            className="d-block rounded-xl"
                            src={p1}
                            alt="First slide"
                            style={{ width: "50%", height: "50%" }}
                        /></a>
                        <div >
                        <Carousel.Caption >
                            <h3><span className='text-black' style={{float:"right" }}>visit: <a href="www.easyfarm.in" className='no-underline text-black'>www.easyfarm.in</a></span></h3>
                        </Carousel.Caption>
                        </div>
                    </Carousel.Item> */}
                    <Carousel.Item>
                        <a href={""}>
                        <img
                            className="d-block rounded-xl"
                            src={s1}
                            alt="First slide"
                        /></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href={""}>
                        <img
                            className="d-block rounded-xl"
                            src={s2}
                            alt="Second slide"
                        /></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href={""}>
                        <img
                            className="d-block rounded-xl"
                            src={s3}
                            alt="Third slide"
                        /></a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href={""}>
                        <img
                            className="d-block rounded-xl"
                            src={s4}
                            alt="Fourth slide"
                        /></a>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}

export default Sliders;