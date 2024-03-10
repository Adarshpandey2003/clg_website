import styles from './Hero.module.css'

export default function Achievements(){
    return (
        <>
            <div className={styles.achievements}>
                <div className={styles.achievement} style={{backgroundColor:'#a90262', borderTopLeftRadius: '12px'}}>
                    <h2 style={{borderRadius: '50%', backgroundColor:'#fff', maxWidth:'fit-content', color: '#000', fontSize: '0.85rem', padding:'0.5rem'}}>01</h2>
                    <h4 style={{marginTop:'0.5rem'}}>Among the only 4 DU Colleges with NAAC A++ accredition.</h4>
                </div>
                <div className={styles.achievement} style={{backgroundColor:'#1c3e95'}}>
                    <h2 style={{borderRadius: '50%', backgroundColor:'#fff', maxWidth:'fit-content', color: '#000', fontSize: '0.85rem', padding:'0.5rem'}}>02</h2>
                    <h4 style={{marginTop:'0.5rem'}}>Emphasis on holistic development.</h4>
                    
                </div>
                <div className={styles.achievement} style={{backgroundColor:'#1f3a7e'}}>
                    <h2 style={{borderRadius: '50%', backgroundColor:'#fff', maxWidth:'fit-content', color: '#000', fontSize: '0.85rem', padding:'0.5rem'}}>03</h2>
                    <h4 style={{marginTop:'0.5rem'}}>Only DU college providing Polymer Science Hons.</h4>
                </div>
            </div>
        </>
    )
}