import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail } from 'react-feather';

const Footer = () => {
    const [hover, setHover] = useState(false);
    const [index, setIndex] = useState(0);

    const onHover = (index) => {
        setHover(true);
        setIndex(index);
    }
    
    const noHover = () => {
        setHover(false);
        setIndex(0);
    }

    const divStyle = { color: '#FFFFFF', paddingRight: '1rem', fontSize: '2.25rem', fontWeight:'lighter' };

    return (
        <div>
            <div className='w-md-half w-full container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-12 d-flex justify-content-center mt-20'>
                        <a className='mx-10' target='_blank' rel='noreferrer' href='https://instagram.com/teammanipalracing?utm_medium=copy_link'>
                            <Instagram onMouseEnter={() => onHover(1)} onMouseLeave={noHover} size={35} color={ hover && index === 1 ? '#ec7b4d' : '#e3e5e5' }/>
                        </a>
                        <a className='mx-10' target='_blank' rel='noreferrer' href='https://www.linkedin.com/company/teammanipalracing/?originalSubdomain=in'>
                            <Linkedin onMouseEnter={() => onHover(2)} onMouseLeave={noHover} size={35} color={ hover && index === 2 ? '#ec7b4d' : '#e3e5e5' }/>
                        </a>
                        <a className='mx-10' target='_blank' rel='noreferrer' href='mailto:tmr.mit@manipal.edu'>
                            <Mail onMouseEnter={() => onHover(3)} onMouseLeave={noHover} size={35} color={ hover && index === 3 ? '#ec7b4d' : '#e3e5e5' }/>
                        </a>
                        <a className='mx-10' target='_blank' rel='noreferrer' href='https://www.facebook.com/Team.Manipal.Racing/'>
                            <Facebook onMouseEnter={() => onHover(4)} onMouseLeave={noHover} size={35} color={ hover && index === 4 ? '#ec7b4d' : '#e3e5e5' }/>
                        </a>
                    </div>
                    <div style={{borderBottom: '1px solid white'}} className='w-md-full w-three-quarter my-10'></div>
                    <div className='d-flex flex-md-row flex-column align-items-center justify-content-center w-auto my-15 font-fira-sans'>
                    <div className="mx-auto text-center">
                            <Link to='/' style={divStyle} className='mx-md-5'>Home</Link>
                        </div>
                        <div className="mx-auto text-center">
                            <Link to='/cars' style={divStyle} className='mx-md-5'>Cars</Link>
                        </div>
                        <div className="mx-auto text-center">
                            <Link to='/team' style={divStyle} className='mx-md-5'>Team</Link>
                        </div>
                        <div className="mx-auto text-center">
                            <Link to='/sponsors' style={divStyle} className='mx-md-5'>Sponsors</Link>
                        </div>
                        <div className="mx-auto text-center">
                            <Link to='/achievements' style={divStyle} className='mx-md-5'>Achievements</Link>
                        </div>
                        <div className="mx-auto text-center">
                            <Link to='/#contact-us' style={divStyle} className='mx-md-5'>Contact</Link>
                        </div>
                    </div>
                    <div style={{borderBottom: '1px solid white'}} className='w-md-full w-three-quarter my-10'></div>
                    <div className='col-12 font-fira-sans'>
                        <p style={{ fontSize: '1.6rem', color: '#FFFFFF',fontWeight:'lighter' }} className='mx-auto text-center'>
                            We are the Developers. 
                            <span style={{ color: '#EC7B4D' }} className='findus-button p-5'>
                                <Link to='/findus'>
                                    Find us
                                </Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer