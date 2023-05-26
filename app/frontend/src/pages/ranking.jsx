import { useEffect, useState } from "react";
import styles from "../styles/ranking.module.scss";
import userService from "../services/userService";
import { BoxLoading } from "react-loadingg";


const Ranking = (props) => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async () => {
        const responseUser = await userService.getAll();

        console.log(responseUser.data)

        setUsers(responseUser.data)
    };

    useEffect(() => {
        setIsLoading(true)
        fetchData();
        setIsLoading(false)
    }, [])

  return (
    <>
        <div className={styles.header}>
            <div>
                <h1>RANKING</h1>
            </div>  
        </div>

        {
            (isLoading || (!users)) ? <BoxLoading color="#0672cb" size="large"/> : 
            <div className={styles.bodyRanking}>
                {
                    users.map((user, index) => {
                        return (
                            <div className={styles.rankingComponent}>
                                <h1><img src={user.imgUrl}></img>{user.name}</h1>
                                <p>{user.points}</p>
                            </div>
                        )
                    })
                }
                {/* // <div className={styles.rankingComponent}>
                //     <h1><img src="https://avatars.githubusercontent.com/u/68920578?v=4"></img>Luiz Kama</h1>
                //     <p>100</p>
                // </div>

                // <div className={styles.rankingComponent}>
                //     <h1><img src="https://avatars.githubusercontent.com/PedroHaggeBaptista"></img>Pedro Baptista</h1>
                //     <p>100</p>
                // </div> */}
            </div>
        }
        
    </>
  );
};

export default Ranking;
