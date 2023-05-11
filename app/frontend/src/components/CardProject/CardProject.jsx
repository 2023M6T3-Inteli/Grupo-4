import React from "react";
import styles from './cardProject.module.scss'

const CardProject = () => {
    return (
       <div className={styles.container}>
         <div className={styles.card}>
            <div className={styles.intro}>
                <div className={styles.title}>
                    <p>Mobile Aplication Project</p>
                </div>
                <div className={styles.status}>
                    <p>ACTIVE</p>
                </div>
            </div>
            <div className={styles.description}>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
               <div>
                    <p>Leader: Mariana Paula</p>
                    <p>Dead line: xx/xx/xxxx</p>
               </div>
            </div>
            <div>
                <div className={styles.tags}>
                    {["HTML", "JavaScript", "Python", "AWS", "React"].slice(0, 3).map(tag => (
                        <p>{tag}</p>
                    ))}
                </div>
            </div>
        </div>
       </div>
  );
};
  
export default CardProject;