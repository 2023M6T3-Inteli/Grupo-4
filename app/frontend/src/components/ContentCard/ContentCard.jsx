import { useState } from "react";

import styles from "./ContentCard.module.scss";
import Modal from "../CardModal/Modal";
import { AnimatePresence } from "framer-motion";
import ContentCardView from "../ContentCardView/ContentCardView";

const ContentCard = ({user, content}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { title, description, tags, media } = content;

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

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
              <img src={user.picture} alt="user_profile" />
            </div>
            <div className={styles.userInfos}>
              <h4>{user.name}</h4>
              <p>{user.area}</p>
            </div>
          </div>
        </div>
        <main>
          <p className={styles.description}>{description}</p>
          {media && (
            <iframe
              src={media[0]}
              title="YouTube video player"
              frameborder="0"
            ></iframe>
          )}
          <div className={styles.tags}>
            {tags.map((tag) => (
              <p>{tag}</p>
            ))}
          </div>
        </main>
      </button>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && (
           <Modal modalOpen={modalOpen} handleClose={close}>
            <ContentCardView handleClose={close} content={content} user={user}/>
           </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContentCard;
