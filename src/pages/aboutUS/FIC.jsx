import React, { useEffect, useState, useRef } from 'react';
import SectionTitle from '../../components/SectionTitle';

const FIC = () => {
  const [faculty, setFaculty] = useState([]);
  const [error, setError] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch('/json/fic.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setFaculty(data))
      .catch((err) => {
        console.error('Error loading faculty data:', err);
        setError('Failed to load faculty data. Please try again later.');
      });
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 0.1], // Trigger at the start of intersection
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const index = cardsRef.current.findIndex((card) => card === entry.target);
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
  }, [faculty]);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <>

    {/* <h1 className='text-4xl oswald-medium uppercase'></h1> */}

    <SectionTitle titleText={'The Leaders Behind Our Success'}/>
    
    <div 
      ref={containerRef} 
      className="min-h-screen relative pt-40"
    >
      <div className="flex flex-col gap-10 relative">
        {faculty.map((member, index) => (
          <div
            key={member.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`sticky top-40 transition-all duration-700`}
            style={{
              transform: `translateY(${index < activeCardIndex ? `-${(activeCardIndex - index) * 20}px` : '0px'}) 
                         rotate(${index < activeCardIndex ? (activeCardIndex - index) * 2 : 0}deg)`,
              zIndex: faculty.length + index // Higher index cards will always be on top
            }}
          >
            <div className="border-4 border-slate-300 bg-black text-[#d0d8b8] rounded-2xl px-3 py-3 lg:px-10 lg:py-14 flex flex-col-reverse lg:flex-row justify-around items-start gap-10 lg:gap-0 lg:items-center">
              {/* Left Section */}
              <div className="flex flex-col items-center gap-6 max-w-full lg:max-w-[67vw] text-center lg:text-left">
                {/* Name and Designation */}
                <h1 className="text-2xl poppins-bold-italic uppercase">{member.name}</h1>
                <p className="text-lg text-pink-300">{member.designation}</p>
                <p className="text-base text-[#d0d8b8]">{member.desigInBranch}</p>
                <p className="text-sm text-gray-300">{member.of}</p>
                {/* Description */}
                <p className="leading-relaxed tracking-wide text-justify md:mr-10">{member.desc}</p>
              </div>

              {/* Right Section */}
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-1/3 rounded-xl shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FIC;
