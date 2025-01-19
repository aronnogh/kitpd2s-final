import React, { useEffect, useState, useRef } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Leaders = () => {
  const [faculty, setFaculty] = useState([]);
  const [error, setError] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    fetch('/json/leaders.json')
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
      threshold: [0, 0.1],
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
    <section className="min-h-screen relative pt-40" ref={containerRef}>
      <div className="flex flex-col gap-10 relative">
        {faculty.map((member, index) => (
          <article
            key={member.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="sticky top-20 transition-all duration-700"
            style={{
              transform: `translateY(${index < activeCardIndex ? `-${(activeCardIndex - index) * 20}px` : '0px'}) 
                         rotate(${index < activeCardIndex ? (activeCardIndex - index) * 2 : 0}deg)`,
              zIndex: faculty.length + index,
            }}
          >
<div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-100 rounded-xl p-6 lg:p-12 flex flex-col-reverse lg:flex-row justify-between items-start gap-8 lg:gap-12">
  <div className="flex flex-col items-center gap-8 max-w-full lg:max-w-[65%] text-center lg:text-left">
    <header>
      <h1 className="text-3xl font-semibold uppercase tracking-wide text-indigo-400">{member.name}</h1>
      <div className="mt-4 space-y-2 space-x-2">
        {member.designation.split(',').map((role, index) => (
          <p
            key={index}
            className="text-sm lg:text-lg text-pink-400 bg-gray-700 border border-pink-500 rounded-lg py-1 px-3 inline-block"
          >
            {role.trim()}
          </p>
        ))}
        <p className="text-lg text-gray-300 mt-2">{member.desigInBranch}</p>
        <p className="text-sm text-gray-400 italic">{member.of}</p>
      </div>
    </header>

    <main className="w-full">
      <p className="text-base leading-relaxed tracking-wide text-justify">
        {member.desc}
      </p>
    </main>

    <footer className="w-full mt-6">
      <nav className="flex justify-center lg:justify-start gap-6">
        <a href={member.insta} className="text-pink-500 hover:text-pink-400 transition-transform transform hover:scale-110" aria-label="Instagram">
          <FaInstagram size={28} />
        </a>
        <a href={member.linkedIn} className="text-blue-500 hover:text-blue-400 transition-transform transform hover:scale-110" aria-label="LinkedIn">
          <FaLinkedin size={28} />
        </a>
      </nav>
    </footer>
  </div>

  <figure className="w-full lg:w-1/3 flex justify-center">
    <img
      src={member.img}
      alt={`${member.name} - ${member.designation}`}
      className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover w-48 lg:w-60"
      loading="lazy"
    />
  </figure>
</div>



          </article>
        ))}
      </div>
    </section>
  );
};

export default Leaders;
