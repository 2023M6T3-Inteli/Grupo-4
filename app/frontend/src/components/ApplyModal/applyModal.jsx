import React from "react";

import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";

import styles from "./applyModal.module.scss";

const ApplyModal = ({ project, user, handleClose }) => {
  const { title, status, deadline, description, tags, media, links } = project;

  return (
    <>
      <header className={styles.header}>
        <button onClick={handleClose}>
          <IoIosArrowBack size={25} />
        </button>
        <div>
          <AiOutlineHeart size={25} />
          <CiMenuKebab size={25} fill="white" />
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.headerModal}>
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>
          <div className={styles.status}>
            <div>
              <p>{status}</p>
            </div>
          </div>
        </div>

        <div className={styles.datesModal}>
          <div className={styles.date}>
            <i class="fa-solid fa-calendar-days fa-2x"></i>
            <p>Start date: {deadline}</p>
          </div>
          <div className={styles.date}>
            <i class="fa-solid fa-calendar-days fa-2x"></i>
            <p>End date: {deadline}</p>
          </div>
          <div className={styles.date}>
            <i class="fa-solid fa-calendar-days fa-2x"></i>
            <p>Deadline: {deadline}</p>
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
      </div>
      <div className={styles.btnSumbit}>
        <button>SUBSCRIBE</button>
      </div>
    </>
  );
};

export default ApplyModal;
