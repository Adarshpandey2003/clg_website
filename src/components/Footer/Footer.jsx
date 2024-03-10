import styles from './Footer.module.css'

export default function Footer(){
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer_content}>
                    <div className={styles.footer_left}>
                        <h2>BCAS</h2>
                        <h4>ज्ञान विज्ञान सहितम</h4>
                    </div>
                    <div className={styles.footer_right}>
                        <div className={styles.footer_links}>
                            <h2 className={styles.links_head}>Quick Links</h2>
                            <h4 className={styles.footer_link}>Link1</h4>
                            <h4 className={styles.footer_link}>Link2</h4>
                            <h4 className={styles.footer_link}>Link3</h4>
                            <h4 className={styles.footer_link}>Link4</h4>
                        </div>
                        <div className={styles.footer_links}>
                            <h2 className={styles.links_head}>Quick Links</h2>
                            <h4 className={styles.footer_link}>Link1</h4>
                            <h4 className={styles.footer_link}>Link2</h4>
                            <h4 className={styles.footer_link}>Link3</h4>
                            <h4 className={styles.footer_link}>Link4</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}