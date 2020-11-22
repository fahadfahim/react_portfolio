import React from 'react';
import SwiperCore, {Autoplay , Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import img6 from '../../../src/images/html.png'
import img7 from '../../../src/images/sass.svg'

import img4 from '../../../src/images/css.png'
import img5 from '../../../src/images/bootstrap.png'
import img2 from '../../../src/images/react.jpg'
import img3 from '../../../src/images/redux.png'
import img1 from '../../../src/images/js.png'
import {ImgBox,SkillH1,SkillContainer,SkillText} from './SkillElements'
const Skill = () => {
    SwiperCore.use([Navigation,Autoplay , Pagination, Scrollbar, A11y]);
    return (
        <SkillContainer id="services">
            <SkillText>
            <SkillH1>Preffered to work with this technology</SkillH1>
            </SkillText>
             
      <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{
        delay:2000
      }}
      breakpoints={{
        460:{
  slidesPerView:1,
        },
        640:{
          slidesPerView:2,
          spaceBetween:10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      
    >
       
      <SwiperSlide style={{marginRight:0}}>
    <ImgBox src={img1}></ImgBox>

        </SwiperSlide>
      <SwiperSlide style={{marginRight:0}}>
        <ImgBox src={img2}></ImgBox>
        </SwiperSlide>
      <SwiperSlide style={{marginRight:0}}>
        <ImgBox src={img3}/>
        </SwiperSlide>
      <SwiperSlide style={{marginRight:0}}>
        <ImgBox src={img4}/>
        </SwiperSlide>
        <SwiperSlide style={{marginRight:0}}>
        <ImgBox src={img7}/>
        </SwiperSlide>
      <SwiperSlide style={{marginRight:0}}>
        <ImgBox src={img5}/>
      </SwiperSlide>
      <SwiperSlide style={{marginRight:0}}>
        <ImgBox src={img6}/>
      </SwiperSlide>
    </Swiper>
        </SkillContainer>

    );
  }
  
export default Skill
