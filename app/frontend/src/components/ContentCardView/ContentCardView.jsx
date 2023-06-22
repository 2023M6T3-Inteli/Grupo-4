import { useState, useEffect, useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineHeart, AiOutlineLink, AiFillTag } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { MdReport } from "react-icons/md";
import userService from "../../services/userService";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import styles from "./ContentCardView.module.scss";
import contentService from "../../services/contentService";
import { BoxLoading } from "react-loadingg";
import StarRating from "../StarRating/StarRating";

const ContentCardView = ({ handleClose, content, user }) => {
  const { title, description, tags, links, id } = content;

  const [owner, setOwner] = useState({});
  const [isOptions, setIsOptions] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [edit, setEdit] = useState(false);

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const linksArray = JSON.parse(links.replace(/'/g, '"'));

  const navigate = useNavigate();

  const editContentHandler = async () => {
    const title = titleInputRef.current.value;
    const description = descriptionInputRef.current.value;

    if (title.trim().length === 0 || description.trim().length === 0) {
      toast.error("Please fill all the fields");
      return;
    }

    const content = {
      title,
      description,
    };

    const response = await contentService
      .updateContent(id, content)
      .then(() => {
        toast.success("Content updated successfully");
        setEdit(false);
      })
      .then(() => {
        window.location.reload();
      });
  };

  async function getOwner() {
    const response = await userService.getUserById(content.ownerId);
    setOwner(response.data);
  }

  async function deleteContent() {
    try {
      setisLoading(true);
      await contentService.deleteContent(content.id);
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  }

  async function reportContent() {
    try {
      setisLoading(true);
      await contentService.reportContent(content.id);
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getOwner();
  }, []);

  if (isLoading) {
    return <BoxLoading color="#0672cb" size="large" />;
  } else {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <button onClick={handleClose}>
              <IoIosArrowBack size={25} />
            </button>
            <div className={styles.starsContainer}>
              <StarRating contentId={id} />
            </div>
          </div>
          <div>
            <AiOutlineHeart size={25} />
            <button
              onClick={() => {
                setIsOptions(!isOptions);
              }}
            >
              <CiMenuKebab size={25} fill="white" />
            </button>
            {isOptions && (
              <div className={styles.optionsContent}>
                <button
                  onClick={() => {
                    reportContent();
                  }}
                >
                  <MdReport fill="white" size={18} />
                  Report
                </button>
                {owner.id == user.id && (
                  <button
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    <BsFillPencilFill fill="white" size={18} />
                    Edit
                  </button>
                )}
                {owner.id == user.id && (
                  <button
                    onClick={() => {
                      deleteContent();
                    }}
                  >
                    <BsFillTrashFill fill="white" size={18} />
                    Delete
                  </button>
                )}
              </div>
            )}
          </div>
        </header>
        <div className={styles.postContentContainer}>
          {edit ? (
            <input
              className={styles.editInput}
              type="text"
              name="title"
              id="title"
              placeholder="title"
              ref={titleInputRef}
            />
          ) : (
            <h1>{title}</h1>
          )}
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
          {edit ? (
            <input
              className={styles.editInput}
              type="text"
              name="description"
              id="description"
              placeholder="description"
              ref={descriptionInputRef}
            />
          ) : (
            <p className={styles.description}>{description}</p>
          )}
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
          {edit ? (
            <div className={styles.editBtnContainer}>
              <button onClick={() => setEdit(false)}>Cancelar</button>

              <button onClick={editContentHandler} className={styles.editBtn}>
                Editar
              </button>
            </div>
          ) : (
            <div className={styles.blueStars}>
              <img src="/temporary/blue-stars.svg" alt="stars_icon" />
            </div>
          )}
        </main>
      </div>
    );
  }
};

export default ContentCardView;
