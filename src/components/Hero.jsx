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
                    <div class="container">
                        <div class="hero__inner">
                            <div class="hero__image">
                                <img src={dog} alt="Dog" />
                            </div>
                            <div class="hero__content">
                                <span class="hero__label">SAVE 10 - 20% OFF</span>
                                <h1 class="hero__title">
                                    Best Destination <br />
                                    For <span>Your Pets</span>
                                </h1>
                                <button class="btn">SHOP NOW →</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="container">
                        <div class="hero__inner">
                            <div class="hero__image">
                                <img src={dog} alt="Dog" />
                            </div>
                            <div class="hero__content">
                                <span class="hero__label">SAVE 10 - 20% OFF</span>
                                <h1 class="hero__title">
                                    Best Destination <br />
                                    For <span>Your Pets</span>
                                </h1>
                                <button class="btn">SHOP NOW →</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="container">
                        <div class="hero__inner">
                            <div class="hero__image">
                                <img src={dog} alt="Dog" />
                            </div>
                            <div class="hero__content">
                                <span class="hero__label">SAVE 10 - 20% OFF</span>
                                <h1 class="hero__title">
                                    Best Destination <br />
                                    For <span>Your Pets</span>
                                </h1>
                                <button class="btn">SHOP NOW →</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Hero