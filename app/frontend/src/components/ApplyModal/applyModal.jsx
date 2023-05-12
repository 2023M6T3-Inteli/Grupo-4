import React from "react";
import styles from "./applyModal.module.scss";

const ApplyModal = (props) => {
  return (
    <>
        <div className={styles.bodyModal}>
            <div className={styles.closeIcon}>
                <i className="fa-solid fa-close fa-3x"></i>
            </div>

            <div className={styles.headerModal}>
                <div className={styles.title}>
                    <h1>Mobile Application Project</h1>
                </div>
                <div className={styles.status}>
                    <div>
                        <p>Status</p>
                    </div>
                </div>
            </div>

            <div className={styles.datesModal}>
                <div className={styles.date}>
                    <i class="fa-solid fa-calendar-days fa-2x"></i>
                    <p>Start date: xx/xx/xxxx</p>
                </div>
                <div className={styles.date}>
                    <i class="fa-solid fa-calendar-days fa-2x"></i>
                    <p>Start date: xx/xx/xxxx</p>
                </div>
                <div className={styles.date}>
                    <i class="fa-solid fa-calendar-days fa-2x"></i>
                    <p>Start date: xx/xx/xxxx</p>
                </div>
            </div>

            <div className={styles.roles}>
                <div className={styles.title}>
                    <i class="fa-solid fa-suitcase fa-2x"></i>
                    <h1>ROLES</h1>
                </div>
                <div className={styles.roleOptions}>
                    <p>Development | available: 6 roles</p>
                    <p>Dev Ops | available: 8 roles</p>
                    <p>Marketing | available: 5 roles</p>
                </div>
            </div>

            <div className={styles.selectRole}>
                <div className={styles.inputRole}>
                    <select name="role" id="role">
                        <option value="role">Select a role</option>
                        <option value="role">Development</option>
                        <option value="role">Dev Ops</option>
                        <option value="role">Marketing</option>
                    </select>
                </div>
            </div>

            <div className={styles.why}>
                <h1>Why do you want this role?</h1>
                <textarea placeholder="Talk about you..."></textarea>
            </div>

            <div className={styles.btnSumbit}>
                <button>SUBSCRIBE</button>
            </div>
        </div>

        
    </>
  );
};

export default ApplyModal;
