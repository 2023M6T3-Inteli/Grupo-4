import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { IoIosArrowBack } from "react-icons/io";
import { AiFillTag, AiOutlineHeart } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";

import userIcon from "../../Assets/User.png";
import calendar from "../../Assets/Calendar.png";
import descriptionIcon from "../../Assets/description.png";
import vector from "../../Assets/Vector.png";

import ApplyModal from "../ApplyModal/applyModal";
import CentralModal from "../CentralModal/Modal";

import styles from "./VisualizeProject.module.scss";

const ProjectCardView = ({ project, user, handleClose }) => {
  const { title, status, startDate, endDate, deadline, tags } = project;

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

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

      <div className={styles.titleStatus}>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
        <div className={styles.status}>
          <div>
            <p>{status}</p>
          </div>
        </div>
      </div>

      <div className={styles.projectInfo}>
        <div className={styles.icon}>
          <img src={userIcon} width={22} alt="user" />
        </div>
        <div>
          <p> Leader: {user.name} </p>
        </div>
      </div>

      <div className={styles.projectInfo}>
        <div className={styles.icon}>
          <img
            src={descriptionIcon}
            width={75}
            height={75}
            alt="description_icon"
          />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
      </div>

      <div className={styles.projectInfo}>
        <div className={styles.icon}>
          <img src={calendar} width={22} alt="calendar_icon" />
        </div>
        <div>
          <p>Start date: {startDate}</p>
        </div>
      </div>

      <div className={styles.projectInfo}>
        <div className={styles.icon}>
          <img src={calendar} width={22} alt="calendar_icon" />
        </div>
        <div>
          <p>End date: {endDate}</p>
        </div>
      </div>

      <div className={styles.tags}>
        <div>
          <AiFillTag fill="var(--primary-600)" size={15} />
          <h4>Tags</h4>
        </div>
        <div>
          {tags.map((tag) => (
            <p>{tag}</p>
          ))}
        </div>
      </div>

      <div className={styles.vector}>
        <div className={styles.icon}>
          <img src={vector} width={22} height={22} alt="vector_icon"/>
        </div>
        <div>
          <div className={styles.roles}>
            <p>ROLES</p>
          </div>
          <div />
          <div className={styles.rowrole}>
            <p>Development | available: 6 roles</p>
          </div>
          <div className={styles.rowrole}>
            <p>Dev Ops | available: 8 roles</p>
          </div>
          <div className={styles.rowrole}>
            <p>Marketing | available: 5 roles</p>
          </div>
        </div>
      </div>

      <div className={styles.projectInfo}>
        <div className={styles.icon}>
          <img src={calendar} width={22} alt="calendar_icon" />
        </div>
        <div>
          <p>Dead line: {deadline}</p>
        </div>
      </div>

      <div className={styles.button}>
        <button onClick={() => (modalOpen ? close() : open())}>
          Subscribe
        </button>
      </div>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <CentralModal modalOpen={modalOpen} handleClose={close}>
            <ApplyModal
              handleClose={close}
              project={project}
              user={user}
            />
          </CentralModal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCardView;