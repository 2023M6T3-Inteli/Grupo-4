import React, { useState } from "react";
import styles from "./ProjectCard.module.scss";
import { AnimatePresence } from "framer-motion";
import Modal from "../CardModal/Modal";
import ApplyModal from "../ApplyModal/applyModal";

const ProjectCard = ({ project, user }) => {
  const { title, status, description, leader, deadline, tags } = project;

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <button
        onClick={() => (modalOpen ? close() : open())}
        className={styles.content}
      >
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.intro}>
              <div className={styles.title}>
                <p>{title}</p>
              </div>
              <div className={styles.status}>
                <p>{status}</p>
              </div>
            </div>
            <div className={styles.description}>
              <div>
                <p>{description}</p>
              </div>
              <div>
                <p>Leader: {leader}</p>
                <p>Dead line: {deadline}</p>
              </div>
            </div>
            <div>
              <div className={styles.tags}>
                {tags.map((tag) => (
                  <p>{tag}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </button>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <ApplyModal
              handleClose={close}
              project={project}
              user={user}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
