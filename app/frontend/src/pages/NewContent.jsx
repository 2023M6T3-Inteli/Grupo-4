import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import contentService from "../services/contentService";
import { useNavigate } from "react-router-dom";

import styles from "../styles/newContent.module.scss";

const NewContent = () => {
  const navigate = useNavigate();
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const fileInputRef = useRef(null);
  const tagInputRef = useRef(null);
  const [tags, setTags] = useState([]);
  const linkInputRef = useRef(null);
  const [links, setLinks] = useState([]);

  const [selectedFile, setSelectedFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const contentData = {
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
      tags: JSON.stringify(tags),
      links: JSON.stringify(links),
    };

    const response = await contentService.createContent(contentData);

    console.log(response);

    toast.success("Conteúdo criado com sucesso!");

    setTimeout(() => {
      navigate("/feed/contents");
    }, 2000);
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const addTag = (event) => {
    event.preventDefault();

    if (tagInputRef.current.value) {
      setTags([...tags, tagInputRef.current.value]);
      tagInputRef.current.value = "";
    }
  };

  const removeTag = (event) => {
    event.preventDefault();

    const tag = event.target.parentElement.firstChild.innerHTML;

    setTags(tags.filter((item) => item !== tag));
  };

  const addLink = (event) => {
    event.preventDefault();
    
    const watchLink = linkInputRef.current.value.split("watch?v=");
    const embedLink = watchLink[0] + "embed/" + watchLink[1];

    if (linkInputRef.current.value) {
      setLinks([...links, embedLink]);
      linkInputRef.current.value = "";
    }
  };

  const removeLink = (event) => {
    event.preventDefault();

    const link = event.target.parentElement.firstChild.innerHTML;

    setLinks(links.filter((item) => item !== link));
  };

  //pagina

  return (
    <div className={styles.container}>
      <div className={styles.ground}>
        <header className={styles.header}>
          <h3> CREATE NEW CONTENT </h3>
        </header>

        <form onSubmit={submitHandler}>
          <div className={styles.field}>
            <input placeholder="TITLE" ref={titleInputRef} />
          </div>

          <div className={styles.field}>
            <textarea placeholder="DESCRIPTION" ref={descriptionInputRef} />
          </div>

          <div className={styles.inputFileContainer}>
            <input
              ref={fileInputRef}
              onChange={handleFileChange}
              type="file"
              name="file"
              id="file"
              accept="image/png, image/jpeg, image/jpg"
            />
            <button type="button" onClick={() => fileInputRef.current?.click()}>
              <AiOutlinePlus size={25} fill="var(--neutral-100)" />
              Add midia
            </button>
            {selectedFile && (
              <p>
                <span>Arquivo selecionado:</span> {selectedFile.name}
              </p>
            )}
          </div>

          <div className={styles.tagsContainer}>
            <h4>TAGS</h4>
            <div>
              <input type="text" ref={tagInputRef} />
              <button type="button" onClick={addTag}>
                <AiOutlinePlus size={25} fill="var(--neutral-600)" />
              </button>
            </div>
          </div>

          {tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((tag, index) => (
                <div key={index}>
                  <p>{tag}</p>
                  <AiOutlineClose
                    size={20}
                    fill="var(--neutral-50)"
                    onClick={removeTag}
                  />
                </div>
              ))}
            </div>
          )}

          <div className={styles.tagsContainer}>
            <h4 onClick={() => console.log(links)}>LINKS</h4>
            <div>
              <input type="text" ref={linkInputRef} />
              <button type="button" onClick={addLink}>
                <AiOutlinePlus size={25} fill="var(--neutral-600)" />
              </button>
            </div>
          </div>

          {links.length > 0 && (
            <div className={styles.links}>
              {links.map((link, index) => (
                <div key={index}>
                  <p>{link}</p>
                  <AiOutlineClose
                    size={20}
                    fill="var(--neutral-50)"
                    onClick={removeLink}
                  />
                </div>
              ))}
            </div>
          )}

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
