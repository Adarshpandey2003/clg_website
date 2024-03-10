import styles from './SubHeader.module.css'

export default function SubHeader(){
    const trendNotice = document.getElementById('trendNotices')

    return(
        <>
            <div className={styles.sub_header}>
                <p className={styles.sub_header_text}>Welcome to Bhaskaracharya College of Applied Sciences</p>
                <div className={styles.assist}>
                    <a href='#' target='_blank' className={`${styles.sub_header_link} ${styles.hindi}`}>
                        <i class="fa fa-language"></i>
                        हिंदी
                    </a>
                    <a href='#' target='_blank' className={`${styles.sub_header_link} ${styles.text_inc}`}>
                        <i class="fa fa-language"></i>
                        A+
                    </a>
                    <a href='#' target='_blank' className={`${styles.sub_header_link} ${styles.text_dec}`}>
                        <i class="fa fa-language"></i>
                        A-
                    </a>
                </div>
                <div className={styles.sub_header_links}>
                    <a href="https://www.twitter.com/" target="_blank" className={styles.sub_header_link}>
                        <i class="uil uil-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" className={styles.sub_header_link}>
                        <i class="uil uil-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" className={styles.sub_header_link}>
                        <i class="uil uil-facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" className={styles.sub_header_link}>
                        <i class="uil uil-linkedin"></i>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" className={styles.sub_header_link}>
                        <i class="uil uil-youtube"></i>
                    </a>
                </div>
            </div>
        </>
    )
}