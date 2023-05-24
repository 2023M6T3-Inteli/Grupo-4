import React, { useState, useEffect} from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../CardModal/Modal";
import ProjectCardView from "../ProjectCardView/ProjectCardView";
import axios from 'axios';
import styles from "./ProjectCard.module.scss";
import { useLocation } from "react-router-dom";

const ProjectCard = ({ project, user }) => {
  const { title, status, description, leader, deadline, tags } = project;
  const [modalOpen, setModalOpen] = useState(false);

  const path = useLocation();

  const pathName = path.pathname;

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const [projects, setProjects] = useState([])

  const getAllProjects = async() => {

    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      
      const data = response.data;

      setProjects(data);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {

    getAllProjects();

  }, [])

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
                {projects.length === 0 ? (<p>Carregando...</p>) :(
                  projects.map((project) => (
                    <div className="project" key={project.id}>
                      <h1>{project.title}</h1>
                      <p>{project.body}</p>
                    </div>
                  ))
                )}
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
        {modalOpen && pathName !== "/profile" && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <ProjectCardView
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
