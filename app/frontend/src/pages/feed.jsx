import { useEffect, useState } from "react";
import FeedNav from "../components/FeedNav/FeedNav";
import Search from "../components/Search/Search";

import styles from "../styles/feed.module.scss";
import ContentCard from "../components/ContentCard/ContentCard";
import CardProject from "../components/ProjectCard/ProjectCard";
import ApplyModal from "../components/ApplyModal/applyModal";

const Feed = (props) => {
  const [contentPage, setContentPage] = useState(props.showContent);
  const [projectPage, setProjectPage] = useState(props.showProject);
  const [isLoading, setisLoading] = useState(false);
  const [contents, setContents] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      const response = await fetch("/content.json");
      const data = await response.json();

      setContents(data.contents);
      setProjects(data.projects)
      setisLoading(false);
    };

    fetchData();
  }, []);

  const changeToProjectHandler = () => {
    setContentPage(false);
    setProjectPage(true);
  };

  const changeToContentHandler = () => {
    setContentPage(true);
    setProjectPage(false);
  };

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (!isLoading && contents) {
    return (
      <>
        {/* <ApplyModal /> */}
        <div className={styles.header}>
          <FeedNav
            onChangeToProject={changeToProjectHandler}
            onChangeToContent={changeToContentHandler}
            projectPage={projectPage}
            contentPage={contentPage}
            option1="CONTENTS"
            option2="PROJECTS"
          />
          <Search />
        </div>
        <div className={styles.behind}></div>
        <main className={styles.feed}>
          {contentPage &&
            contents.map((content) => {
              return <ContentCard user={content.user} content={content} />;
            })}
          {projectPage && (
            projects.map((project) => {
              return <CardProject project={project} />;
            })
          )}
        </main>
      </>
    );
  }
};

export default Feed;
