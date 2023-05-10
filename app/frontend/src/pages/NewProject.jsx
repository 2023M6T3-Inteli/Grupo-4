import React, { useState } from 'react';
import styles from "../styles/NewProject.module.scss";

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

  return (
    <div className={styles.container}>

      <div>
      <h1>Create New Project</h1>
      </div>

      <div className={styles.labelContainer}>
      <label>
         Title:
         <input value={title} onChange={(e) => setTitle(e.target.value)} />
       </label>
       <label>
         Leader:
         <input value={leader} onChange={(e) => setLeader(e.target.value)} />
       </label>
      </div>
      <div className={styles.labelContainer}>
       <label>
         Description:
         <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
       </label>
       </div>

       <div>
       <label>
         Subject:
         <select value={subject} onChange={(e) => setSubject(e.target.value)}>
           {/* Add your project subjects as options here */}
           <option value="">Choose subject</option>
           <option value="subject1">Subject 1</option>
           <option value="subject2">Subject 2</option>
         </select>
       </label>
        </div>

      <div className={styles.dateContainer}>
       <label>
         Start Date:
         <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
       </label>
       <label>
         End Date:
         <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
       </label>
        </div>
      <div className={styles.dateContainer}>
      <label>
         Deadline:
        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
       </label>
       <label>
         Delivery Time:
       <input type="time" value={deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)} />
     </label>
     </div>
    

     <div className={styles.dateContainer}>
      <h2>Roles</h2>
      {roles.map((role, index) => (
        <div key={index}>
          <label>
            Role Name:
            </label>
            <input
              value={role.name}
              onChange={(e) => handleRoleChange(index, 'name', e.target.value)}
            />
          
          <label>
            Count:
            <input
              type="number"
              value={role.count}
              onChange={(e) =>
                handleRoleChange(index, 'count', e.target.value)
              }
            />
          </label>
        </div>
        
      ))}

      <div>
      <button type="button" onClick={handleAddRole}>+</button>
      </div>
      </div>
      <div className={styles.dateContainer}>
      <h2>Tags</h2>
      {tags.map((tag, index) => (
        <div key={index}>
        <input
          value={tag}
          onChange={(e) => handleTagChange(index, e.target.value)}
          />
          </div>
          ))}
      <div>
      <button onClick={handleAddTag}>+</button>
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

