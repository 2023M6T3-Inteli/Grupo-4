import { useEffect, useState } from "react";

import styles from "../styles/profile.module.scss";
import ContentCard from "../components/ContentCard/ContentCard";
import ProjectReduces from "../components/ProjectReduced/projectReduces";
import ContentReduced from "../components/ContentReduced/contentReduced";
import FeedNav from "../components/FeedNav/FeedNav";
import CardProject from "../components/ProjectCard/ProjectCard";
import userService from "../services/userService";
import { useNavigate } from "react-router-dom";

const Perfil = (props) => {
  const [contentPage, setContentPage] = useState(true);
  const [projectPage, setProjectPage] = useState(false);
  const [user, setUser] = useState({
    area: "",
    contents: [],
    email: "",
    createdAt: "",
    id: "",
    name: "",
    projects: [],
    updatedAt: "",
    tags: [],
    password: "",
  });

  //const [xp, setXp] = useState(1400);

  const navigate = useNavigate();

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
      const responseUser = await userService.getUser();

      console.log(responseUser.data)

      if(responseUser.status !== 200) {
        navigate("/login")
      }

      responseUser.data.tags = JSON.parse(responseUser.data.tags);

      setUser({...user, ...responseUser.data});
      
      const response = await fetch("/content.json");
      const data = await response.json();
    };

    fetchData();
  }, []);

  var lv = 1
  var lvmult = 1.5
  var xpnext = 100
  var xp = 1400

  while (xp >= xpnext) {

    if (xp >= xpnext) {
        lv += 1
        xp -= xpnext
        xpnext = xpnext * lvmult
    }

    if (lv === 5) {
      lvmult = 1.7
    }

  }

  var percent = 660 - (660 * (xp / xpnext * 100)) / 100

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
            <img src={user.imgUrl} alt="user_profile" />
            <div>
              <h1>{`Lv ${lv}`}</h1>
            </div>
            
            <svg width="220px" height="220px" style={{strokeDashoffset:percent}}>
              <circle cx="110" cy="110" r="106" stroke-linecap="round" />
            </svg>
        </div>

        {
          user && (
            <div className={styles.profileInfos}>
              <h1>{user.name}</h1>
              <p>{user.area}</p>
              <p>{user.email}</p>
            </div>
          )
        }
        {/* <div className={styles.profileInfos}>
            <h1>Luiz Kama</h1>
            <p>Front-End Dev</p>
            <p>luiz.kama@dell.com</p>
        </div> */}

        <div className={styles.interests}>
          <h1>INTERESTS</h1>
          <div className={styles.tags}>
            {
            user && (
              user.tags.map(tag => (
                <p>{tag}</p>
              ))
            )
          }
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
            {
              contentPage && (
                user.contents.map((content) => {
                  return <ContentCard user={user} content={content} />;
                })
              )
            }
            {
              projectPage && (
                user.projects.map((project) => {
                  // return <CardProject user={user} project={project} />;
                  return <div>{JSON.stringify(project)}</div>
                }
              ))
            }
            {
              (!user) && (
                <div style={{"fontSize": "14pt", "color": "white"}}>Carregando...</div>
              )
            }
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Perfil;