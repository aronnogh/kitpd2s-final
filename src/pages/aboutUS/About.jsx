import React from 'react';
import '../../fonts.css'
import { Link } from 'react-router';
import SectionTitle from '../../components/SectionTitle';

const About = () => {
  return (
    <div className=''>
        <SectionTitle titleText={'Who We Are'} />
        <p className='my-5 tracking-wider text-md text-justify leading-loose mx-10'>KITPD2S (KIIT Product Development and Smart Systems) is a renowned interdisciplinary society under the Mechanical Engineering Department of KIIT University, dedicated to fostering innovation and advancing Industry 4.0 technologies. The society serves as a platform for students to explore cutting-edge concepts in areas such as smart systems, robotics, IoT, AI, and sustainable design. Since its inception, KITPD2S has emphasized hands-on learning through collaborative projects, research papers, and innovative solutions to real-world challenges. Members actively engage in software development, UI-UX design, and graphics designing, contributing to a holistic learning environment. The society also supports students' aspirations by providing mentorship, resources, and opportunities to realize their creative ideas. Seniors and mentors are highly collaborative and supportive, cultivating an inclusive culture that encourages intellectual growth and teamwork. KITPD2S frequently organizes workshops, seminars, and hackathons, equipping members with the skills to thrive in the fast-evolving technological landscape. By integrating academic learning with practical application, the society plays a vital role in shaping the next generation of tech-savvy innovators who are well-prepared to address industrial and societal needs.</p>
</div>
  );
};

export default About;
