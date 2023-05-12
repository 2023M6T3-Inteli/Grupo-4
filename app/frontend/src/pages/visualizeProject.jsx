import React from "react";
import user from "../Assets/User.png"
import styles from '../styles/visualizeProject.module.scss'
import calendar from '../Assets/Calendar.png'
import arrow from "../Assets/arrow.png"
import description from "../Assets/description.png"
import heart from "../Assets/Heart.png"
import plus from "../Assets/Plus.png"
import tag from "../Assets/Tag.png"
import vector from "../Assets/Vector.png"


const VisualizeProject = () => {
return(
  <div className={styles.container}>
    <div className={styles.ground}>
      <div>
        <img src={arrow} width={28} className={styles.arrow}/>
      </div>

      <div>
        <img src={heart} width={28} className={styles.heart}/>
      </div>

      <div>
        <img src={plus} width={28} className={styles.plus}/>
      </div>

    <h1> Mobile Application Project </h1>
      <div className={styles.Leader}>
        <img src= {user} width={20} alt="user"/>
        <div>
          <p> Leader: Mariana Paula </p>
        </div>
      </div>

      <div className={styles.description}>
        <img src={description} width={20} /> 
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
      </div>

      <div className={styles.calendar}>
        <img src={calendar} width={20} />
        <div>
          <p>Start date: 10/01/2023</p>
        </div>
      </div>

      <div className={styles.calendar}>
        <img src={calendar} width={20} />
        <div>
          <p>End date: 10/10/2023</p>
        </div>
      </div>

      <div className={styles.tag}>
        <img src={tag} width={20} />
        <div>
          <p>TAGS</p>
        </div>
      </div>

      <div className={styles.vector}>
        <img src={vector} width={20} />
        <div>
          <p>ROLES</p>
        <div/>
        <div>
          <p>Development | available: 6 roles</p>
        </div>
        <div>
          <p>Dev Ops | available: 8 roles</p>
        </div>
          <p>Marketing | available: 5 roles</p>
        </div>
      </div>

      <div className={styles.calendar}>
        <img src={calendar} width={20} />
        <div>
          <p>Dead Line: 10/02/2023</p>
        </div>
      </div>

    </div>

  </div>

  );
}

export default VisualizeProject;