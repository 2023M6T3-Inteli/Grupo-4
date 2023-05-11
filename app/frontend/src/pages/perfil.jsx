import { useEffect, useState } from "react";

import styles from "../styles/profile.module.scss";
import ContentCard from "../components/ContentCard/ContentCard";
import ProjectReduces from "../components/ProjectReduced/projectReduces";

const Perfil = (props) => {
  return (
    <>
      <div className={styles.header}>
        <div>
          <div>
            <button className={styles.btnIconsHeader}>
              <i class="fa-solid fa-pen fa-2x"></i>
            </button>
          </div>
          <div>
            <button className={styles.btnIconsHeader}> 
              <i class="fa-solid fa-ellipsis-vertical fa-2x"></i>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.profileImage}>
        	<img src="https://avatars.githubusercontent.com/u/68920578?v=4" alt="user_profile" />
          <div>
            <h1>Lv 12</h1>
          </div>
      </div>

      <div className={styles.profileInfos}>
        	<h1>Luiz Kama</h1>
          <p>Front-End Dev</p>
          <p>luiz.kama@dell.com</p>
      </div>

      <div className={styles.interests}>
        <h1>INTERESTS</h1>
        <div className={styles.tags}>
          {["HTML", "JavaScript", "Python", "AWS", "React"].map(tag => (
            <p>{tag}</p>
          ))}
        </div>
      </div>

      <div className={styles.history}>
        <h1>RECENTLY ACCESSED</h1>
        <ProjectReduces />
      </div>
    </>
  )
}

export default Perfil;