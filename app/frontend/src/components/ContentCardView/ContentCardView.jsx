import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHeart, AiOutlineLink, AiFillTag } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import userService from "../../services/userService";

import styles from "./ContentCardView.module.scss";

const ContentCardView = ({ handleClose, content, user }) => {
  const { title, description, tags, links } = content;

  const [owner, setOwner] = useState({});

  let tagsArray = JSON.parse(tags.replace(/'/g, '"'));

  const linksArray = JSON.parse(links.replace(/'/g, '"'));

  async function getOwner() {
    const response = await userService.getUserById(content.ownerId);
    console.log(response.data);
    setOwner(response.data);
  }

  useEffect(() => {
    getOwner();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <button onClick={handleClose}>
            <IoIosArrowBack size={25} />
          </button>
          <img src="/temporary/stars.svg" alt="stars_icon" />
        </div>
        <div>
          <AiOutlineHeart size={25} />
          <CiMenuKebab size={25} fill="white" />
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
            {tagsArray.map((tag) => (
              <p>{tag}</p>
            ))}
          </div>
        </div>
        <div className={styles.blueStars}>
          <img src="/temporary/blue-stars.svg" alt="stars_icon" />
        </div>
      </main>
    </div>
  );
};

export default ContentCardView;
