import styles from './AboutTrailer.module.css'
import BCAS1 from '../../assets/slider_hero.jpg'
import Logo from '../../assets/logo-nobg.png'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


export default function AboutTrailer(){

    useEffect(()=>{
        Aos.init()
    }, [])

    return (
        <>
            <div className={styles.about_trailer}>
                <div className={styles.about_trailer_images} data-aos="fade-up" data-aos-offset="10" data-aos-delay="50" data-aos-duration="1000">
                    <div><img src={BCAS1} alt='BCAS Image' className={styles.about1}/></div>
                    <img src={Logo} alt='BCAS Logo' className={styles.about2}/>
                </div>
                <div className={styles.about_trailer_desc} data-aos="fade-up" data-aos-offset="100" data-aos-delay="50" data-aos-duration="1000">
                    <h2 style={{fontSize:'1rem'}}>ABOUT</h2>
                    <h1>Holistic Growth, <br />ज्ञान विज्ञान सहितम</h1>
                    <p>Bhaskaracharya College of Applied Sciences (BCAS) is a constituent public college of the University of Delhi and one of the top ranked colleges in India. Established in 1995, it offers undergraduate courses in various disciplines of sciences and applied sciences. The institution has been honoured with 'Star College' status by the Ministry of Science and Technology, Government of India.</p>
                    <Link to="/"><button className="primary-button" data-aos="fade-up" data-aos-delay="75" data-aos-duration="1000" data-aos-offset="20">
                        Read More <i class="uil uil-arrow-right"></i>
                    </button></Link>
                </div>
            </div>
        </>
    )
}