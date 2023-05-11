import React from "react";
import { CardProject } from "../components/CardProject";
import styles from "../styles/feedProject.module.scss"
import filters from "../Assets/Filters.png"

const FeedProject = () => {
    return (
        <div className={styles.container}>
            <div className={styles.feeds}>
                <div className={styles.button}>
                    <p>Contents</p>
                </div>
                <div className={styles.button}>
                    <p>Projects</p>
                </div>
            </div>
            <div className={styles.filters}>
                <div>
                <input className={styles.search}/>
                </div>
                <div className={styles.iconfilter}>
                <img src={filters} width={30}/>
                </div>
            </div>
            <CardProject />
            <CardProject />
            <CardProject />
        </div>
  );
};  

export default FeedProject;