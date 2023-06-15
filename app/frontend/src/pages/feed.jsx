import { useEffect, useState } from "react";
import FeedNav from "../components/FeedNav/FeedNav";
import Search from "../components/Search/Search";

import styles from "../styles/feed.module.scss";
import ContentCard from "../components/ContentCard/ContentCard";
import CardProject from "../components/ProjectCard/ProjectCard";
import userService from "../services/userService";
import { useNavigate } from "react-router-dom";
import contentService from "../services/contentService";
import projectService from "../services/projectService";
import { BoxLoading } from "react-loadingg";
import { ToastContainer } from "react-toastify";

const Feed = (props) => {
  const [contentPage, setContentPage] = useState(props.showContent);
  const [projectPage, setProjectPage] = useState(props.showProject);
  const [isLoading, setisLoading] = useState(false);
  const [contents, setContents] = useState([]);
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);

      let reccomendationTag;

      let responseUser;

      try {
        responseUser = await userService.getUser();
        setUser(responseUser.data);
      } catch (err) {
        navigate("/");
      }

      const responseContent = (
        await contentService.getContent()
      ).data.reverse();
  
      console.log(responseContent)

      const responseProject = (
        await projectService.getProject()
      ).data.reverse();

      if (responseUser.data.tags.length > 0) {
        reccomendationTag = responseUser.data.tags[0].name;
      } else {
        reccomendationTag = "Toy Story";
      }

      const responseReccomendation = (
        await contentService.getRecommendation(reccomendationTag)
      ).data;

      if (responseReccomendation) {
        responseContent.forEach((content, index) => {
          if (index < responseReccomendation.length) {
            content.title = responseReccomendation[index];
          }
        });
      }

      setContents(responseContent);
      setProjects(responseProject);

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

  if (contents && projects) {
    return (
      <>
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
          {isLoading && <BoxLoading color="#0672cb" size="large" />}
          {!isLoading &&
            contentPage &&
            contents.map((content) => {
              return <ContentCard user={user} content={content} />;
            })}
          {!isLoading &&
            projectPage &&
            projects.map((project) => {
              return <CardProject project={project} user={user} />;
              // return <div>{JSON.stringify(project)}</div>
            })}
        </main>
        <ToastContainer style={{ fontSize: "14pt" }} />
      </>
    );
  }
};

export default Feed;
