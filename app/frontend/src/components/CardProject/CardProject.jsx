import React from "react";
import styles from "./cardProject.module.scss";

const CardProject = (props) => {
  const { title, status, description, leader, deadline, tags } = props.project;

  return (
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
  );
};

export default CardProject;
