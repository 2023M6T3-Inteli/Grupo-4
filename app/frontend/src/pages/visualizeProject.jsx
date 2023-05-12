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
      <div className={styles.intro}>
      <div>
        <img src={arrow} width={28} className={styles.arrow}/>
      </div>

      <div className={styles.endintro}>
        <div>
          <img src={heart} width={28} className={styles.heart}/>
        </div>

        <div>
          <img src={plus} width={28} className={styles.plus}/>
        </div>
      </div>
      </div>

    <div className={styles.title}>
    <p> Mobile Application Project </p>
    </div>
      <div className={styles.Leader}>
        <div className={styles.icon}>
        <img src= {user} width={22} alt="user"/>
        </div>
        <div>
          <p> Leader: Mariana Paula </p>
        </div>
      </div>

      <div className={styles.description}>
        <div className={styles.icon}>
        <img src={description} width={22} height={22}/> 
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
      </div>

      <div className={styles.calendar}>
        <div className={styles.icon}>
        <img src={calendar} width={22} />
        </div>
        <div>
          <p>Start date: 10/01/2023</p>
        </div>
      </div>

      <div className={styles.calendar}>
        <div className={styles.icon}>
        <img src={calendar} width={22}  />
        </div>
        <div>
          <p>End date: 10/10/2023</p>
        </div>
      </div>

      <div className={styles.tag}>
        <div className={styles.icon}>
        <img src={tag} width={22} />
        </div>
        <div>
          <p>TAGS</p>
        </div>
      </div>

      <div className={styles.vector}>
        <div className={styles.icon}>
        <img src={vector} width={22} height={22} />
        </div>
        <div>
          <div className={styles.roles}>
          <p>ROLES</p>
          </div>
        <div/>
        <div className={styles.rowrole}>
          <p>Development | available: 6 roles</p>
        </div>
        <div className={styles.rowrole}>
          <p>Dev Ops | available: 8 roles</p>
        </div >
        <div className={styles.rowrole}>
          <p>Marketing | available: 5 roles</p>
          </div>
        </div>
      </div>

      <div className={styles.calendar}>
        <div className={styles.icon}>
        <img src={calendar} width={22} />
        </div>
        <div>
          <p>Dead Line: 10/02/2023</p>
        </div>
      </div>

    </div>

  </div>

  );
}

export default VisualizeProject;