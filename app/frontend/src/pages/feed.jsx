import { useEffect, useState } from "react";
import FeedNav from "../components/FeedNav/FeedNav";
import Search from "../components/Search/Search";

import styles from "../styles/feed.module.scss";
import ContentCard from "../components/ContentCard/ContentCard";

const Feed = (props) => {
  const [contentPage, setContentPage] = useState(true);
  const [projectPage, setProjectPage] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      const response = await fetch("/content.json");
      const data = await response.json();

      setContents(data.contents);
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
        <div className={styles.header}>
          <FeedNav
            onChangeToProject={changeToProjectHandler}
            onChangeToContent={changeToContentHandler}
            projectPage={projectPage}
            contentPage={contentPage}
          />
          <Search />
        </div>
        <div className={styles.behind}></div>
        <main className={styles.feed}>
          {contentPage &&
            contents.map((content) => {
              return <ContentCard user={content.user} content={content} />;
            })}
          {projectPage && <p>feed de projetos</p>}
        </main>
      </>
    );
  }
};

export default Feed;
