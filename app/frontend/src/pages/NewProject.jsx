import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { BoxLoading } from "react-loadingg";

import contentService from "../services/contentService";
import { useNavigate } from "react-router-dom";

import styles from "../styles/newProject.module.scss";
import projectService from "../services/projectService";
import userService from "../services/userService";

const NewProject = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [tags, setTags] = useState([]);
  const [roles, setRoles] = useState([
    {
      nome: "",
      qntVagas: "",
      area: "",
    },
  ]);

  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const projectTypeInputRef = useRef();
  const startDateInputRef = useRef();
  const endDateInputRef = useRef();
  const deadlineDateInputRef = useRef();
  const tagInputRef = useRef(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const userId = (await userService.getUser()).data.id;

    const projectData = {
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
      projectType: projectTypeInputRef.current.value,
      ownerId: userId,
      roles: JSON.stringify(roles),
      tags: JSON.stringify(tags),
      startDate: startDateInputRef.current.value,
      endDate: endDateInputRef.current.value,
      deadline: deadlineDateInputRef.current.value,
    };

    setIsLoading(true);

    const response = await projectService.createProject(projectData);

    toast.success("Projeto criado com sucesso!");

    setTimeout(() => {
      navigate("/feed/projects");
    }, 1000);
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

  const addRole = (event) => {
    event.preventDefault();

    setRoles([
      ...roles,
      {
        nome: "",
        qntVagas: "",
        area: "",
      },
    ]);
  };

  //pagina

  return (
    <div className={styles.container}>
      {!isLoading && (
        <div className={styles.ground}>
          <header className={styles.header}>
            <h3> CREATE NEW PROJECT </h3>
          </header>

          <form onSubmit={submitHandler}>
            <div className={styles.field}>
              <input placeholder="TITLE" ref={titleInputRef} />
            </div>

            <div className={styles.field}>
              <textarea placeholder="DESCRIPTION" ref={descriptionInputRef} />
            </div>

            <div className={styles.field}>
              <input placeholder="AREA" ref={projectTypeInputRef} />
            </div>

            <div className={styles.dateField}>
              <h4 className={styles.h4}>DURATION</h4>
              <div className={styles.inputsContainer}>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  ref={startDateInputRef}
                />
                <p>UNTIL</p>
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  ref={endDateInputRef}
                />
              </div>
            </div>

            <div className={styles.dateField}>
              <h4 className={styles.h4}>DEADLINE</h4>
              <div className={styles.inputsContainer}>
                <input
                  type="date"
                  name="deadline"
                  id="deadline"
                  ref={deadlineDateInputRef}
                />
              </div>
            </div>

            <div className={styles.rolesContainer}>
              <div className={styles.rolesHeader}>
                <h4 className={styles.h4} onClick={() => console.log(roles)}>
                  ROLES
                </h4>
                <button type="button">
                  <AiOutlinePlus
                    size={25}
                    fill="var(--neutral-600)"
                    onClick={addRole}
                  />
                </button>
              </div>
              <div className={styles.rolesList}>
                {roles.map((role, index) => (
                  <div key={index} className={styles.role}>
                    <input
                      type="text"
                      name="roleName"
                      id="roleName"
                      placeholder="ROLE"
                      onChange={(e) => {
                        const newRoles = [...roles];
                        newRoles[index].nome = e.target.value;
                        setRoles(newRoles);
                      }}
                    />
                    <input
                      type="number"
                      name="roleQnt"
                      id="roleQnt"
                      placeholder="QNT"
                      onChange={(e) => {
                        const newRoles = [...roles];
                        newRoles[index].qntVagas = e.target.value;
                        setRoles(newRoles);
                      }}
                    />
                    <input
                      type="text"
                      name="roleArea"
                      id="roleArea"
                      placeholder="AREA"
                      onChange={(e) => {
                        const newRoles = [...roles];
                        newRoles[index].area = e.target.value;
                        setRoles(newRoles);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.tagsContainer}>
              <h4 className={styles.h4}>TAGS</h4>
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

            <div className={styles.button}>
              <button type="submit">CREATE</button>
            </div>
          </form>
        </div>
      )}
      {isLoading && <BoxLoading color="#0672cb" size="large" />}
      <ToastContainer style={{ fontSize: "14pt" }} />
    </div>
  );
};

export default NewProject;
