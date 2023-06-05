import React, { useEffect, useRef, useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";

import styles from "./applyModal.module.scss";
import { useNavigate } from "react-router-dom";
import projectService from "../../services/projectService";

const ApplyModal = ({ project, user, handleClose }) => {
  const { title, status, deadline, offers, id } = project;

  const [roleError, setRoleError] = useState(false);
  const [role, setRole] = useState("role");
  const [why, setWhy] = useState("role");

  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "role") {
      setRoleError(false);
    }
  }, [role]);

  const subscribeHandler = async () => {
    if (role === "role") {
      setRoleError(true);
      return;
    }

    const response = await projectService.applyProject(why, id, role);

    console.log(response);

    navigate("/profile");
  };

  console.log(project);

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
            {offers.map((offer) => (
              <p>
                <span className={styles.cap}>{offer.name}</span> | available:{" "}
                {offer.qntVagas} roles
              </p>
            ))}
          </div>
        </div>

        <div className={styles.selectRole}>
          <div className={styles.inputRole}>
            <select
              // ref={roleSelectRef}
              onChange={(e) => setRole(e.target.value)}
              name="role"
              id="role"
              className={roleError && styles.roleError}
            >
              <option value="role">Select a role</option>
              {offers.map((offer) => (
                <option className={styles.cap} key={offer.id} value={offer.id}>
                  {offer.name}
                </option>
              ))}
            </select>
            {roleError && (
              <p className={styles.pError}>You must select a role!</p>
            )}
          </div>
        </div>

        <div className={styles.why}>
          <h1>Why do you want this role?</h1>
          <textarea
            onChange={(e) => setWhy(e.target.value)}
            placeholder="Talk about you..."
          ></textarea>
        </div>
      </div>
      <div className={styles.btnSumbit}>
        <button onClick={subscribeHandler}>SUBSCRIBE</button>
      </div>
    </>
  );
};

export default ApplyModal;
