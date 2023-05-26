import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "../styles/NewContent.module.scss";
import contentService from "../services/contentService";
import { useNavigate } from "react-router-dom";

const NewContent = () => {
  const navigate = useNavigate();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const contentData = {
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
      tags: "['AWS', 'Python']",
      links: "['https://www.youtube.com/embed/MPrcxoTE1xw']",
    };

    const response = await contentService.createContent(contentData);

    toast.success("Conteúdo criado com sucesso!");

    setTimeout(() => {
      navigate("/feed/contents");
    }, 2000);
  };

  //pagina

  return (
    <div className={styles.container}>
      <div className={styles.ground}>
        <header className={styles.header}>
          <h3> CREATE NEW CONTENT </h3>
        </header>

        <form onSubmit={submitHandler}>
          <div className={styles.title}>
            <input placeholder="TITLE" ref={titleInputRef} />
          </div>

          <div className={styles.description}>
            <textarea placeholder="DESCRIPTION" ref={descriptionInputRef} />
          </div>

          <div className={styles.button}>
            <button type="submit">CREATE</button>
          </div>
        </form>
      </div>
      <ToastContainer style={{ fontSize: "14pt" }} />
    </div>
  );
};

export default NewContent;
