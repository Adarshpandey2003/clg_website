import styles from './Hero.module.css'
import HeroVideo from '../../assets/course-video.mp4'
import Achievements from './Achievements'

export default function Hero(){
    return (
        <>
            <div className={styles.hero}>
                <video autoPlay muted loop className={styles.hero_video}>
                    <source src={HeroVideo} type='video/mp4'/>
                </video>

                <div className={styles.video_overlay}>
                    <div className={styles.hero_text}>
                        <h2>BCAS</h2>
                        <h4>ज्ञान विज्ञान सहितम</h4>
                    </div>
                </div>                
            </div>
            <Achievements />
        </>
    )
}