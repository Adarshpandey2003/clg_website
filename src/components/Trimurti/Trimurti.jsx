import styles from './Trimurti.module.css'
import PrinceImg from '../../assets/psir.jpg'
import { Link } from 'react-router-dom'

export default function Trimurti(){
    return (
        <>
            <div className={styles.container}> {/*lighter*/}
                <div className={styles.trimurti}>
                    <div className={`${styles.principal_desk} ${styles.trimurti_item}`}>
                        <div className={styles.img_container}>
                            <img src={PrinceImg} alt='BCAS Principal' />
                        </div>
                        <h2>Principal's Desk</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, vitae repudiandae? Earum veritatis assumenda placeat, obcaecati minima architecto illum officia doloribus...</p>
                        <Link to="/" style={{display:'block', margin:'0 auto', maxWidth:'fit-content'}}>
                            <button type='button' className='primary-button'>
                            Read More</button>
                        </Link>
                    </div>
                    <div className={`${styles.events} ${styles.trimurti_item}`}>
                        <div>
                            <h1 className={styles.trimurti_item_title}>Events</h1>
                        </div>
                        <hr />
                        <div>
                            <p>Img Carausel</p>
                        </div>
                    </div>
                    <div className={`${styles.notices} ${styles.trimurti_item}`}>
                        <div>
                            <h1 className={styles.trimurti_item_title}>Notices</h1>
                        </div>
                        <hr />
                        <div>
                            <p>NoticesList</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}