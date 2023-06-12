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
import ContentCardAdmin from "../components/ContentCardAdmin/contentCardAdmin";

const Admin = (props) => {
    const [contentPage, setContentPage] = useState(props.showContent);
    const [projectPage, setProjectPage] = useState(props.showProject);
    const [isLoading, setisLoading] = useState(false);
    const [contents, setContents] = useState([]);
    const [projects, setProjects] = useState([]);
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    async function fetchContents() {
        console.log("fetching contents");
        try {
            setisLoading(true);
            const response = await contentService.getReported();
            setContents(response.data);
            setisLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    async function verify() {
      try {
        const response = await userService.verifyAdmin();
        return
      } catch (error) {
        console.log(error);
        navigate("/feed/contents");
      }
    }


    useEffect(() => {

      verify()

      fetchContents();
    }, []);

  if (contents) {
    return (
      <>
        <div className={styles.header}>
          <Search />
        </div>
        <div className={styles.behind}></div>
        <main className={styles.feed}>
            {isLoading && <BoxLoading color="#0672cb" size="large" />}
            {(!isLoading && contents.length != 0) ?
                contents.map((content) => {
                    return <ContentCardAdmin user={user} content={content} />;
                }
              ) : (
                <div className={styles.noContent}>
                  <h1>No content to show :)</h1>
                </div>
              )
            }
        </main>
        <ToastContainer style={{ fontSize: "14pt" }} />
      </>
    );
  }
};

export default Admin;
