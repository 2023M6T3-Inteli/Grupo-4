import { useEffect, useState } from "react";

import styles from "../styles/profile.module.scss";
import ContentCard from "../components/ContentCard/ContentCard";
import ProjectReduces from "../components/ProjectReduced/projectReduces";
import ContentReduced from "../components/ContentReduced/contentReduced";
import FeedNav from "../components/FeedNav/FeedNav";
import CardProject from "../components/ProjectCard/ProjectCard";

const Perfil = (props) => {
  const [contentPage, setContentPage] = useState(true);
  const [projectPage, setProjectPage] = useState(false);
  const [contents, setContents] = useState([]);
  const [projects, setProjects] = useState([]);

  const changeToProjectHandler = () => {
    setContentPage(false);
    setProjectPage(true);
  };

  const changeToContentHandler = () => {
    setContentPage(true);
    setProjectPage(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/content.json");
      const data = await response.json();

      setContents(data.contents);
      setProjects(data.projects);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={styles.body}>
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
          <div className={styles.scrollView}>
            <ContentReduced />
            <ProjectReduces />
          </div>
        </div>

        <div className={styles.feedNav}>
          <FeedNav
              onChangeToProject={changeToProjectHandler}
              onChangeToContent={changeToContentHandler}
              projectPage={projectPage}
              contentPage={contentPage}
              option1="MY POSTS"
              option2="PROJECTS APPLIED"
          />
        </div>

        <div className={styles.personal}>
          <div className={styles.personalDiv}>
            {contentPage &&
              contents.map((content) => {
                return <ContentCard user={content.user} content={content} />;
              })}
            {projectPage && 
              projects.map((project) => {
                return <CardProject project={project} />;
              })
            }
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Perfil;