import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import '../../fonts.css'
import PosterOfEvent from '../../components/PosterOfEvent';

const EventPoster = () => {
  return (
    <div className='mx-10 poppins-regular'>
      <SectionTitle border={true} titleText={'Exciting Events Ahead'} />

      <PosterOfEvent />
    </div>
  )
}

export default EventPoster
