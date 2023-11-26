import React, { useEffect } from 'react';
import './contact.css';
import gsap from 'gsap';
import {AiOutlineArrowUp} from 'react-icons/ai'
const Contact = () => {
    useEffect(() => {
        const links = document.querySelectorAll('.links');

        const mouseEnterHandler = (link) => {
            gsap.to(link, { scale: 1.2, ease: 'elastic.out(1, 0.5)' });
        };

        const mouseLeaveHandler = (link) => {
            gsap.to(link, { scale: 1, ease: 'elastic.out(1, 0.5)' });
        };

        links.forEach((link) => {
            link.addEventListener('mouseenter', () => mouseEnterHandler(link));
            link.addEventListener('mouseleave', () => mouseLeaveHandler(link));
        });

    
        return () => {
            links.forEach((link) => {
                link.removeEventListener('mouseenter', () => mouseEnterHandler(link));
                link.removeEventListener('mouseleave', () => mouseLeaveHandler(link));
            });
        };
    }, [])
    

    return (
        <div className="contactContainer" id='contacts'>
            <h1><span className='colour'>C</span>ontact</h1>
            <div className="socialLinks">
                <div className="links">
                    <a className='textToggle' href={`mailto:${'sohilvp1@gmail.com'}`}>Email</a>
                </div>
                <div className="links">
                    <a  className='textToggle' href="https://www.linkedin.com/in/sohilvp" target='_blank'>LinkedIn</a>
                </div>
                <div className="links">
                    <a className='textToggle' href="https://github.com/sohilvp" target='_blank'>GitHub</a>
                </div>
                    <div className="moveTop"><a href="#home"><AiOutlineArrowUp className='icon textToggle'/></a></div>
            </div>                         
        </div>
    );
};

export default Contact;
