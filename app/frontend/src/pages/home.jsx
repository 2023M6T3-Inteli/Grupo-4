import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from '../styles/home.module.scss'
import ProjectReduces from "../components/ProjectReduced/projectReduces";
import ContentReduced from "../components/ContentReduced/contentReduced";
import userService from "../services/userService";
import CardProject from "../components/ProjectCard/ProjectCard";
import ContentCard from "../components/ContentCard/ContentCard";
import contentService from "../services/contentService";
import projectService from "../services/projectService";

const Home = (props) => {

    const [isLoading, setisLoading] = useState(false);
    const [contents, setContents] = useState([]);
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          setisLoading(true);

          try {
            const responseUser = await userService.getUser();
            setUser(responseUser.data);
          } catch (err) {
            navigate("/home");
          }
     
          const responseContent = await contentService.getContent();
          const responseProject = await projectService.getProject();
    
          setContents(responseContent.data.reverse());
          setProjects(responseProject.data.reverse());

          setisLoading(false);
        };
    
        fetchData();
    }, []);

    const navigateHandler = (route) => {
        window.scrollTo(0, 0)
        navigate(route)
      } 

    return(<div className={s.home}>
        <div className={s.highlights}>
            <h1>HIGHLIGHTS</h1>

            {/* <div className={s.scrollView}>
                {  projects && 
                    projects.map((project) => {
                        return <CardProject project={project} user={project.user}/>;
                })}    
            </div> */}
        </div>

        <div className={s.topic}>
            <h1>TOPIC 1</h1>

            <div className={s.scrollView}>
                {/* <ContentReduced/>
                <ContentReduced/>
                <ContentReduced/> */}
            {!isLoading &&
            contents.map((content) => {
              return <ContentCard user={user} content={content} />;
            })}
            </div>
        </div>

        <div className={s.topic}>
            <h1>TOPIC 2</h1>

            <div className={s.scrollView}>
            {!isLoading &&
            contents.map((content) => {
              return <ContentCard user={user} content={content} />;
            })}
            </div>
        </div>

        <div className={s.endBtn}>
            <button onClick={() => navigateHandler("/feed/contents")}>
                SEE MORE
            </button>
        </div>


    </div>)
}

export default Home;