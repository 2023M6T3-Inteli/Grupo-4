import { useState, useEffect } from "react";
import CardProject from "../components/CardProject/CardProject";
import styles from "../styles/feedProject.module.scss"
import filters from "../Assets/Filters.png"

import FeedNav from "../components/FeedNav/FeedNav";
import Search from "../components/Search/Search";

const FeedProject = () => {

    const [contentPage, setContentPage] = useState(true);
    const [projectPage, setProjectPage] = useState(false);

    const changeToProjectHandler = () => {
        setContentPage(false);
        setProjectPage(true);
      };
    
      const changeToContentHandler = () => {
        setContentPage(true);
        setProjectPage(false);
      };

    return (
        <>
            <div className={styles.header}>
                <FeedNav
                    onChangeToProject={changeToProjectHandler}
                    onChangeToContent={changeToContentHandler}
                    projectPage={projectPage}
                    contentPage={contentPage}
                    option1={"Contents"}
                    option2={"Projects"}
                />
                <Search />
            </div>
            <div className={styles.behind}></div>
            <div className={styles.cards}>
                <div className={styles.divCards}>
                    <CardProject />
                    <CardProject />
                    <CardProject />
                </div>
            </div>
        </>
        
        // <div className={styles.container}>
        //     {/* <div className={styles.feeds}>
        //         <div className={styles.button}>
        //             <p>Contents</p>
        //         </div>
        //         <div className={styles.button}>
        //             <p>Projects</p>
        //         </div>
        //     </div>
        //     <div className={styles.filters}>
        //         <div>
        //         <input className={styles.search}/>
        //         </div>
        //         <div className={styles.iconfilter}>
        //         <img src={filters} width={30}/>
        //         </div>
        //     </div> */}
             
            
        // </div>
  );
};  

export default FeedProject;