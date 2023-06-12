import { useEffect, useState } from "react";

import styles from "./contentCardAdmin.module.scss";
import Modal from "../CardModal/Modal";
import { AnimatePresence } from "framer-motion";
import ContentCardView from "../ContentCardView/ContentCardView";
import { useLocation } from "react-router-dom";
import userService from "../../services/userService";
import ContentCardViewAdmin from "../ContentCardViewAdmin/ContentCardViewAdmin";

const ContentCardAdmin = ({ user, content }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [owner, setOwner] = useState({});
  const { title, description, tags, links } = content;

  //let tagsArray = JSON.parse(tags.replace(/'/g, "\""))

  const linksArray = JSON.parse(links.replace(/'/g, "\""));

  const path = useLocation();

  const pathName = path.pathname;

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  async function getOwner() {
    const response = await userService.getUserById(content.ownerId);
    setOwner(response.data);
  }

  useEffect(() => {
    getOwner();
  }, []);

  return (
    <>
      <button
        onClick={() => (modalOpen ? close() : open())}
        className={styles.content}
      >
        <div className={styles.header}>
          <h1>{title}</h1>
          <div className={styles.userBx}>
            <div className={styles.imgBx}>
              <img src={owner.imgUrl} alt="user_profile" />
            </div>
            <div className={styles.userInfos}>
              <h4>{owner.name}</h4>
              <p>{owner.area}</p>
            </div>
          </div>
        </div>
        <main>
          <p className={styles.description}>{description}</p>
          {links && (
            <iframe
              src={linksArray[0]}
              title="YouTube video player"
              frameborder="0"
            ></iframe>
          )}
          <div className={styles.tags}>
            {tags.map((tag) => (
              <p>{tag.name}</p>
            ))}
          </div>
        </main>
      </button>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && pathName !== "/profile" && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <ContentCardViewAdmin
              handleClose={close}
              content={content}
              user={user}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContentCardAdmin;
