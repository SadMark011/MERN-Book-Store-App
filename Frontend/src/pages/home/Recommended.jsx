import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';

// Import Swiper React components: Used To build responsive sliding components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation} from 'swiper/modules';


const Recommended = () => {
  
    const [books,setBooks] = useState([]);
  
    useEffect(() => {
      fetch("books.json")
      .then(res => res.json())
      .then((data) => setBooks(data))
    }, [])
  
    return (
    <div>
        <h2 className='text-3xl font-semibold mb-6'>Recommended For You</h2>

        <Swiper
        slidesPerView={1}
        spaceBetween={30}

        navigation={true}

        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}

        modules={[Navigation]}
        className="mySwiper" >

            {/* Displaying Books and Filtering */}

            {
                books.length > 0 && books.slice(8,18).map((book,index) => (
                    <SwiperSlide key={index} >
                        <BookCard book={book}/>
                    </SwiperSlide>
                    
                ))
            }

            
            
        </Swiper>
    </div>
  )
}

export default Recommended