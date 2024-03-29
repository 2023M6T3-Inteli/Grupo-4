import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHeart, AiOutlineLink, AiFillTag } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import { BsFillTrashFill } from "react-icons/bs";
import { MdReport } from "react-icons/md";
import userService from "../../services/userService";
import { motion } from "framer-motion"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import styles from "./ContentCardViewAdmin.module.scss";
import contentService from "../../services/contentService";
import { BoxLoading } from "react-loadingg";
import StarRating from "../StarRating/StarRating";

const ContentCardViewAdmin = ({ handleClose, content, user }) => {
  const { title, description, tags, links, id } = content;

  const [owner, setOwner] = useState({});
  const [isOptions, setIsOptions] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  //let tagsArray = JSON.parse(tags.replace(/'/g, '"'));

  const linksArray = JSON.parse(links.replace(/'/g, '"'));

  const navigate = useNavigate();

  async function getOwner() {
    const response = await userService.getUserById(content.ownerId);
    setOwner(response.data);
  }

  async function deleteContent() {
    try {
      setisLoading(true);
      await contentService.deleteContent(content.id);
      navigate(0)
    } catch (error) {
      console.log(error);
    }
  }

  async function closeReport() {
    try {
      setisLoading(true);
      await contentService.closeReport(content.id);
      navigate(0)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOwner();
  }, []);

  if(isLoading) {
    return <BoxLoading color="#0672cb" size="large" />
  } else {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <button onClick={handleClose}>
              <IoIosArrowBack size={25} />
            </button>
          </div>          
        </header>
        <div className={styles.postContentContainer}>
          <h1>{title}</h1>
          <div className={styles.userBx}>
            <div className={styles.imgBx}>
              {/* <img src={user.picture} alt="user_profile" /> */}
              <img
                src={owner.imgUrl ? owner.imgUrl : user.picture}
                alt="user_profile"
              />
            </div>
            <div className={styles.userInfos}>
              <h4>{owner.name}</h4>
              <p>{owner.area}</p>
            </div>
          </div>
        </div>
        <main>
          <p className={styles.description}>{description}</p>
          <div className={styles.mediaContainer}>
            {linksArray &&
              linksArray.map((link) => {
                if (link.includes("youtube")) {
                  return (
                    <iframe
                      src={link}
                      title="YouTube video player"
                      frameborder="0"
                    ></iframe>
                  );
                } else {
                  return <img src={link} alt="media" />;
                }
              })}
          </div>
          <div className={styles.infosBx}>
            <div>
              <AiOutlineLink fill="var(--primary-600)" size={15} />
              <h4>Links</h4>
            </div>
            <div>
              {linksArray.map((link) => (
                <p>{link}</p>
              ))}
            </div>
          </div>
          <div className={styles.infosBx}>
            <div>
              <AiFillTag fill="var(--primary-600)" size={15} />
              <h4>Tags</h4>
            </div>
            <div>
              {tags.map((tag) => (
                <p>{tag.name}</p>
              ))}
            </div>
          </div>
          <div className={styles.blueStars}>
            <button className={styles.deleteBtn} onClick={() => {deleteContent()}}>Deletar</button>
            <button className={styles.closeBtn} onClick={() => {closeReport()}}>Fechar Reclamação</button>
          </div>
        </main>
        
      </div>
    );
  } 
};

export default ContentCardViewAdmin;
