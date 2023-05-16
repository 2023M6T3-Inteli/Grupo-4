import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from '../styles/home.module.scss'
import ProjectReduces from "../components/ProjectReduced/projectReduces";
import ContentReduced from "../components/ContentReduced/contentReduced";
import CardProject from "../components/ProjectCard/ProjectCard";

const Home = (props) => {

    const [isLoading, setisLoading] = useState(false);
    const [contents, setContents] = useState([]);
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

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

    const navigateHandler = (route) => {
        window.scrollTo(0, 0)
        navigate(route)
      } 

    return(<div className={s.home}>
        <div className={s.highlights}>
            <h1>HIGHLIGHTS</h1>

            <div className={s.scrollView}>
                {  projects && 
                    projects.map((project) => {
                        return <CardProject project={project} user={project.user}/>;
                })}    
            </div>
        </div>

        <div className={s.topic}>
            <h1>TOPIC 1</h1>

            <div className={s.scrollView}>
                <ContentReduced/>
                <ContentReduced/>
                <ContentReduced/>
            </div>
        </div>

        <div className={s.topic}>
            <h1>TOPIC 2</h1>

            <div className={s.scrollView}>
                <ContentReduced/>
                <ProjectReduces/>
                <ContentReduced/>
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