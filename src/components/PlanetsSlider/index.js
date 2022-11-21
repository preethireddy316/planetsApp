// Write your code here
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import Slider from 'react-slick'


import './index.css'

import PlanetItem from "../PlanetItem";


const PlanetSlider = (props) => {
    const {planetsList}=props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container" testid="planets">
      <Slider {...settings}>
        {planetsList.map(each=><PlanetItem key={each.id} details={each}/>)}
      </Slider>
    </div>
  )
}

export default PlanetSlider