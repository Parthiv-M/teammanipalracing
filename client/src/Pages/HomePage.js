import './../Styles/globalStyles.css';
import { Helmet } from 'react-helmet';
import JumboText from './../Components/JumboText';
import NavBar from './../Components/NavBar';
import Footer from './../Components/Footer';
import WhoAreWe from '../Components/WhoAreWe';
import ContactUs from '../Components/ContactUs';
import HeroSection from '../Components/HeroSection';

const HomePage = () => {
    return (
        <div className='overflow-x-hidden'>
            <Helmet>
                <title>Team Manipal Racing</title>
                <meta name='description' content='The official website of Team Manipal Racing' />
                <meta name='theme-color' content='#EFEFEF' />
                <meta
                  name='keywords'
                  content='tmr, manipal, manipal institute of technology, clubs, student clubs, student, organization, cars, racing, atv'
                />
                <meta name='url' content='https://teammanipalracing.in/' />
                <meta name='coverage' content='Worldwide' />
                <meta name='target' content='all' />
                <meta name='HandheldFriendly' content='True' />
                <link rel="canonical" href="https://teammanipalracing.in/" />
                {/* OG meta tags */}
                <meta property="og:type" content="webpage" />
                <meta
                  property="og:title"
                  content="Home | Team Manipal Racing"
                />
                <meta
                  property="og:description"
                  content="The official website of Team Manipal Racing"
                />
                <meta property="og:image" content='' />
                <meta property="og:url" content='https://teammanipalracing.in/' />
                <meta
                  property="og:site_name"
                  content="Team Manipal Racing"
                />
                <meta
                  name='twitter:title'
                  content='Home | Team Manipal Racing'
                />
                <meta
                  name="twitter:description"
                  content="The official website of Team Manipal Racing"
                />
                <meta name="twitter:image" content="" />
                <meta name="twitter:site" content="@tmrbaja" />
                <meta name="twitter:creator" content="@tmrbaja" />
            </Helmet>
            <div 
              className="home-banner"
            >                    
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.866)' }}>
              <NavBar />
              <JumboText />
            </div>    
            </div>
            <div style={{ height: 'auto', marginBottom: '2rem' }}>
                <WhoAreWe />
            </div>
            <h1 className='text-center font-staatliches pt-20 gradient-heading' style={{ color:'#EC7B4D', fontSize:'6rem' }}>WHAT WE DO</h1>
            <HeroSection styleProps={{ align: 'start', image: 'https://live.staticflickr.com/65535/51258599298_89f023f345_n.jpg' }} data={{ title: 'M-Baja', full: 'Combustion Team', detail: 'BAJA SAE INDIA is an intercollegiate design competition. Teams of students from universities all over India design and build small off-road cars. The cars all have engines of the same specifications. As of 2017 the engine has been an unmodified Briggs & Stratton single-cylinder with a displacement of 300cc and power output of approximately 10bhp. TMR has competed every year in this event.' }}/>
            <HeroSection styleProps={{ align: 'start', image: 'https://live.staticflickr.com/65535/51259439715_71f9633693_n.jpg' }} data={{ title: 'E-Baja', full: 'Electric Team', detail: 'eBAJA is an intercollegiate design competition where teams of students need to design and build electric powered ATVs that have power train designed to work on 48V and a 110AH battery pack. TMR is currently venturing into E-Baja' }}/>    
            <div style={{ height: 'auto' }} id="contact-us">
              <ContactUs />
            </div>        
            <Footer />
        </div>
    );
}

export default HomePage;