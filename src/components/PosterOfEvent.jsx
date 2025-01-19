import React, { useEffect, useState, useRef } from 'react';

const PosterOfEvent = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch('/json/eventsPoster.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setEvents(data))
      .catch((err) => {
        console.error('Error loading events:', err);
        setError('Failed to load events. Please try again later.');
      });
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.1], // Changed to trigger at the start of intersection
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const index = cardsRef.current.findIndex((card) => card === entry.target);
        // Update active index as soon as the card starts becoming visible
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          setActiveCardIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [events]);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div 
      ref={containerRef} 
      className="min-h-screen relative pt-40"
    >
      <div className="flex flex-col gap-10 relative">
        {events.map((event, index) => (
          <div
            key={event.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`
              sticky top-40
              transition-all duration-700
            `}
            style={{
              transform: `translateY(${index < activeCardIndex ? `-${(activeCardIndex - index) * 20}px` : '0px'}) 
                         rotate(${index < activeCardIndex ? (activeCardIndex - index) * 2 : 0}deg)`,
              zIndex: events.length + index // Higher index cards will always be on top
            }}
          >
            <div className="border-4 border-slate-300 bg-black text-[#d0d8b8] rounded-2xl px-3 py-3 lg:px-10 lg:py-14 flex flex-col-reverse lg:flex-row justify-around items-start gap-10 lg:gap-0 lg:items-center">
              {/* Left Section */}
              <div className="flex flex-col items-center gap-10 max-w-full lg:max-w-[67vw]">
                {/* Title */}
                <h1 className="text-2xl poppins-bold-italic uppercase">{event.title}</h1>
                {/* Event Details */}
                <div className="border-2 border-[#d0d8b8] px-3 py-2 rounded-xl flex flex-col lg:flex-row text-center lg:text-start gap-10 text-pink-300">
                  <span>Date: {event.date}</span>
                  <span className="text-[#d0d8b8] hidden lg:block">|</span>
                  <span>Venue: {event.venue}</span>
                </div>
                {/* Description */}
                <p className="hidden md:block leading-relaxed tracking-wide text-justify mr-5">{event.description}</p>
                {/* Registration Section */}
                <div className="flex flex-col lg:flex-row items-center justify-around md:w-2/3 border-2 border-[#d0d8b8] py-5 px-2 rounded-2xl bg-[#d0d8b8] text-black text-xs md:text-xl">
                  <p className='pb-5'>Excited to join us in the event?</p>
                  <div>
                    <a href="/" className="relative inline-block text-xs md:text-lg group">
                      <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative">Register Now!!!</span>
                      </span>
                      <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <img src={event.image} alt={event.title} className="w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PosterOfEvent;