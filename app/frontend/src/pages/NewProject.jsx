import React, { useState } from 'react';
import styles from "../styles/NewProject.module.scss";
import { IoIosArrowBack } from "react-icons/io";


const NewProject = () => {
  const [title, setTitle] = useState('');
  const [leader, setLeader] = useState('');
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [deadline, setDeadline] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [roles, setRoles] = useState([{ name: '', count: 0 }]);
  const [tags, setTags] = useState(['']);
 
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const projectData = {
      title,
      leader,
      description,
      subject,
      startDate,
      endDate,
      deadline,
      deliveryTime,
      roles,
      tags,
    };
  
    const response = await fetch('/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });
  
    if (response.ok) {
      console.log('Project created successfully');
    } else {
      console.log('Failed to create project');
    }
  };
  

  const handleAddRole = () => {
    setRoles([...roles, { name: '', count: 0 }]);
  };

  const handleRoleChange = (index, field, value) => {
    const newRoles = [...roles];
    if (field === 'name') {
      newRoles[index][field] = value;
    } else if (field === 'count') {
      newRoles[index][field] = parseInt(value, 10);
    }
    setRoles(newRoles);
  };

  const handleAddTag = () => {
    setTags([...tags, '']);
  };

  const handleTagChange = (index, value) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };




//pagina

return (

  <div className={styles.container}>

    <div className={styles.ground}>

    <header className={styles.header}>
      <button >
        <IoIosArrowBack size={25} color="white" />
      </button>
      <h3> CREATE NEW PROJECT </h3>
    </header>

    <div className={styles.title}>
         <form onSubmit={handleSubmit}>
         <input value={title} placeholder='TITLE' onChange={(e) => setTitle(e.target.value)} />
         </form>
       </div>
      
      <div className={styles.title}>
         <form onSubmit={handleSubmit}>
         <input value={leader} placeholder='CO-LEADER' onChange={(e) => setLeader(e.target.value)} />
         </form>
      </div>
      
      
      <div className={styles.description}>
       <form onSubmit={handleSubmit}>
         <textarea value={description} placeholder='DESCRIPTION' onChange={(e) => setDescription(e.target.value)} />
        </form>
       </div>

       <div className={styles.selectArea}>
       <div className={styles.Area}>
         <form onSubmit={handleSubmit}>
         <select value={subject} onChange={(e) => setSubject(e.target.value)}>
           {/* Add your project subjects as options here */}
           <option value="">AREA</option>
           <option value="subject1">Subject 1</option>
           <option value="subject2">Subject 2</option>
         </select>
         </form>
         </div>
        </div>

      <div className={styles.dates} >
       
        <div className={styles.dateContainer}>
          <div className={styles.date}>
            <div className={styles.dateItem}>DURATION</div>
            
            <form onSubmit={handleSubmit} className={styles.dateItem}>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              <i class="fa-solid fa-calendar-days fa"></i>
            </form>
          </div>
          
          <h3> UNTIL </h3>

          <div className={styles.date}>
            <div className={styles.dateItem}> END DATE </div>
            <form onSubmit={handleSubmit} className={styles.dateItem}>
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
              <i class="fa-solid fa-calendar-days fa"></i>
            </form> 
          </div>
        </div>

        <div className={styles.dateContainer}>
          <div className={styles.date}>
            <div className={styles.dateItem}> DEAD LINE </div>
            
            <form onSubmit={handleSubmit} className={styles.dateItem}>
              <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
              <i class="fa-solid fa-calendar-days fa"></i>
            </form>
          </div>
          
          <div className={styles.date}>
            <div className={styles.dateItem}> DELIVERY TIME </div>
            <form onSubmit={handleSubmit} className={styles.dateItem}>
              <input type="time" value={deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)} />
            </form> 
          </div>
        </div>

     </div>
    

     
     <div className="rolesContainer">
      
      {roles.map((role, index) => (
        <div key={index} className="roleItem">
          <form onSubmit={handleSubmit}>
            <input
              value={role.name}
              onChange={(e) => handleRoleChange(index, 'name', e.target.value)} placeholder='role'
            />
            </form>
          
          <label>
            Count:
            <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={role.count}
              onChange={(e) =>
                handleRoleChange(index, 'count', e.target.value)
              }
            />
            </form>
          </label>
        </div>
        
      ))}
    </div>
      <div>
      <button type="button" onClick={handleAddRole}>+</button>
      </div>
      <div className={styles.tags}>
      <div> <h3>TAGS</h3></div>
      <div><button onClick={handleAddTag}>+</button></div>
      </div>
        <div className={styles.tagsContainer}>
      {tags.map((tag, index) => (
      <div key={index}>
        <input
          value={tag}
          onChange={(e) => handleTagChange(index, e.target.value)}
          className={styles.onetag}
        />
      </div>
    ))}
    
</div>
  <div className={styles.button}>
        <button>CREATE</button>
      </div>

    </div>
    </div>
);

};

export default NewProject;

        























// import React, { useState } from 'react';

// interface roles {
//   name: string;
//   count: number;
// }

// const NewProject: React.FC = () => {
//   const [title, setTitle] = useState('');
//   const [leader, setLeader] = useState('');
//   const [description, setDescription] = useState('');
//   const [subject, setSubject] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [deadline, setDeadline] = useState('');
//   const [deliveryTime, setDeliveryTime] = useState('');
//   const [roles, setroles] = useState<roles[]>([]);
//   const [tags, setTags] = useState<string[]>([]);

//   const handleAddRole = () => {
//     setroles([...roles, { name: '', count: 0 }]);
//   };

//   const handleRoleChange = (index: number, field: keyof roles, value: string | number) => {
//     const newroles = [...roles];
//     if (field === 'name') {
//       newroles[index][field] = value as string;
//     } else if (field === 'count') {
//       newroles[index][field] = value as number;
//     }
//     setroles(newroles);
//   };
  

//   const handleAddTag = () => {
//     setTags([...tags, '']);
//   };

//   const handleTagChange = (index: number, value: string) => {
//     const newTags = [...tags];
//     newTags[index] = value;
//     setTags(newTags);
//   };

//   return (
//     <div>
//       <h1>Create New Project</h1>
//       <label>
//          Title:
//          <input value={title} onChange={(e) => setTitle(e.target.value)} />
//        </label>
//        <label>
//          Leader:
//          <input value={leader} onChange={(e) => setLeader(e.target.value)} />
//        </label>
//        <label>
//          Description:
//          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
//        </label>
//        <label>
//          Subject:
//          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
//            {/* Add your project subjects as options here */}
//            <option value="">Choose subject</option>
//            <option value="subject1">Subject 1</option>
//            <option value="subject2">Subject 2</option>
//          </select>
//        </label>
//        <label>
//          Start Date:
//          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
//        </label>
//        <label>
//          End Date:
//          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
//        </label>
//       <label>
//          Deadline:
//         <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
//        </label>
//        <label>
//          Delivery Time:
//        <input type="time" value={deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)} />
//      </label>

//       <h2>Roles</h2>
//       {roles.map((role, index) => (
//         <div key={index}>
//           <label>
//             Role Name:
//             <input
//               value={role.name}
//               onChange={(e) => handleRoleChange(index, 'name', e.target.value)}
//             />
//           </label>
//           <label>
//             Count:
//             <input
//               type="number"
//               value={role.count}
//               onChange={(e) =>
//                 handleRoleChange(index, 'count', parseInt(e.target.value, 10))
//               }
//             />
//           </label>
//         </div>
//       ))}
//       <button onClick={handleAddRole}>Add roles</button>
  
//       <h2>Tags</h2>
//       {tags.map((tag, index) => (
//         <div key={index}>
//           <input
//             value={tag}
//             onChange={(e) => handleTagChange(index, e.target.value)}
//           />
//         </div>
//       ))}
//       <div>
//         <button onClick={handleAddTag}>Add Tag</button>
//       </div>
//     </div>
//   );
  
//   };
  
//   export default NewProject;

