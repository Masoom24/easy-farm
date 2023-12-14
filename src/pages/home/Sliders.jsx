import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import s1 from './Images/SliderImg1.png';
import s2 from './Images/SliderImg2.png';
import s3 from './Images/SliderImg3.png';
import s4 from './Images/SliderImg4.png';


const Sliders = () => {
    return (
        <section className='flex justify-center'>
            <div className='w-3/4'>
                <Carousel>
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
