import { useEffect } from 'react';
import styles from './Stats.module.css'

export default function Stats(){
    useEffect(() => {
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting){
                    timeIt(entry.target)
                }
            })
        }, {threshold:1})

        const timeIt = (element)=>{
            setTimeout(()=>{
                updateCount(element)
            }, 500)
        }

        const counters = document.querySelectorAll('.counters')

        counters.forEach((counter)=>{
            observer.observe(counter)
        })        
        
        const updateCount = (counter) => {
            const duration = 100;
            const speed = 20;
            let count = +counter.textContent;
            const target = +counter.getAttribute('data-value');
            
            const inc = Math.ceil(target/duration);

            let counting = setInterval(() => {
                count += inc;
                if (count >= target){
                    count = target;
                    clearInterval(counting);
                }
                counter.textContent = count;
            }, speed)
            observer.unobserve(counter)
        }
        
    }, [])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.overlay_theme}>
                    <div className={styles.stats}>
                        <div className={styles.stats_item}>
                            <h1 className="counters" data-value={1500}>0</h1>
                            <p>STUDENTS</p>
                        </div>
                        <div className={styles.stats_item}>
                            <h1 className="counters" data-value={100}>0</h1>
                            <p>FACULTY</p>
                        </div>
                        <div className={styles.stats_item}>
                            <h1 className="counters" data-value={200}>0</h1>
                            <p>STAFF</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}