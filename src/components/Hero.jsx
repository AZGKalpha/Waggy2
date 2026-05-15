import dog from '../assets/img.png';

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
    return (
        <section className='hero'>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    dynamicBullets: true
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}>
                <SwiperSlide>
                    <div className="container">
                        <div className="hero__inner">
                            <div className="hero__image">
                                <img src={dog} alt="Dog" />
                            </div>
                            <div className="hero__content">
                                <span className="hero__label">SAVE 10 - 20% OFF</span>
                                <h1 className="hero__title">
                                    Best Destination <br />
                                    For <span>Your Pets</span>
                                </h1>
                                <button className="btn">SHOP NOW →</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="hero__inner">
                            <div className="hero__image">
                                <img src={dog} alt="Dog" />
                            </div>
                            <div className="hero__content">
                                <span className="hero__label">SAVE 10 - 20% OFF</span>
                                <h1 className="hero__title">
                                    Best Destination <br />
                                    For <span>Your Pets</span>
                                </h1>
                                <button className="btn">SHOP NOW →</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="container">
                        <div className="hero__inner">
                            <div className="hero__image">
                                <img src={dog} alt="Dog" />
                            </div>
                            <div className="hero__content">
                                <span className="hero__label">SAVE 10 - 20% OFF</span>
                                <h1 className="hero__title">
                                    Best Destination <br />
                                    For <span>Your Pets</span>
                                </h1>
                                <button className="btn">SHOP NOW →</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Hero