'use client'

import React from 'react'


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './card';


const flashsales = [ 
    {
        id: 1,
        price_cut: '-40%',
        favorite: true,
        pic: '/static/images/G92_GamePad.png',
        item_name: 'Havit HV-G92 Gamepad',
        initial_price: 'ksh 160',
        current_price: 'Ksh 120',
        rating: '88'
    },
    {
        id: 2,
        price_cut: '-36%',
        favorite: false,
        pic: '/static/images/AK_Keyboard.png',
        item_name: 'AK-900 Wired Keyboard',
        initial_price: 'Ksh 1160',
        current_price: 'Ksh 960',
        rating: '75'
    },
    {
        id: 3,
        price_cut: '-30%',
        favorite: false,
        pic: '/static/images/Gaming_Monitor.png',
        item_name: 'IPS LCD Gaming Monitor',
        initial_price: 'Ksh 50 000',
        current_price: 'Ksh 45, 000',
        rating: '99'
    },
    {
        id: 4,
        price_cut: '-25%',
        favourite: false,
        pic: '/static/images/Comfort_Chair.png',
        item_name: 'S-Series Comfort Chair',
        initial_price: 'Ksh 15 000',
        current_price: 'Ksh 13 500',
        rating: '99'
    },
    {
        id: 4,
        price_cut: '-25%',
        favourite: false,
        pic: '/static/images/Comfort_Chair.png',
        item_name: 'S-Series Comfort Chair',
        initial_price: 'Ksh 15 000',
        current_price: 'Ksh 13 500',
        rating: '99'
    },
    {
        id: 4,
        price_cut: '-25%',
        favourite: false,
        pic: '/static/images/Comfort_Chair.png',
        item_name: 'S-Series Comfort Chair',
        initial_price: 'Ksh 15 000',
        current_price: 'Ksh 13 500',
        rating: '99'
    },
    {
        id: 4,
        price_cut: '-25%',
        favourite: false,
        pic: '/static/images/Comfort_Chair.png',
        item_name: 'S-Series Comfort Chair',
        initial_price: 'Ksh 15 000',
        current_price: 'Ksh 13 500',
        rating: '99'
    },
    {
        id: 4,
        price_cut: '-25%',
        favourite: false,
        pic: '/static/images/Comfort_Chair.png',
        item_name: 'S-Series Comfort Chair',
        initial_price: 'Ksh 15 000',
        current_price: 'Ksh 13 500',
        rating: '99'
    },
    {
        id: 4,
        price_cut: '-25%',
        favourite: false,
        pic: '/static/images/Comfort_Chair.png',
        item_name: 'S-Series Comfort Chair',
        initial_price: 'Ksh 15 000',
        current_price: 'Ksh 13 500',
        rating: '99'
    },
    {
        id: 4,
        price_cut: '-25%',
        favourite: false,
        pic: '/static/images/Comfort_Chair.png',
        item_name: 'S-Series Comfort Chair',
        initial_price: 'Ksh 15 000',
        current_price: 'Ksh 13 500',
        rating: '99'
    },
    {
        id: 4,
        price_cut: '-25%',
        favourite: false,
        pic: '/static/images/Comfort_Chair.png',
        item_name: 'S-Series Comfort Chair',
        initial_price: 'Ksh 15 000',
        current_price: 'Ksh 13 500',
        rating: '99'
    }
]


function MyCarousel() {

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
    };

  return (
    <div>
        <Carousel 
            partialVisibile={true}
            responsive={responsive}
            swipeable={false}
            draggable={false}
            autoPlay={true}
            autoPlaySpeed={5000}
            // customTransition="all .5"
            transitionDuration={1000}
            removeArrowOnDeviceType={["tablet", "mobile"]}

            >
            { flashsales.map(item =>{
                return <Card item={item} />
            })}
        </Carousel>;
    </div>
  )
}

export default MyCarousel





