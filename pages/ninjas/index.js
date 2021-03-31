import { useEffect } from "react"
import styles from "../../styles/Ninjas.module.css"
import Link from 'next/link'
export const getStaticProps = async () =>{
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: { ninjas: data }
    }
}

const Ninjas = ({ ninjas }) =>{ 
    return(
        <div>
            <h1>
                {ninjas.map(ninja => (
                    <div key={ninja.id} className={styles.single} >
                        <Link href={`/ninjas/${ninja.id}`}>
                            <a>
                                <h4>{ninja.name}</h4>
                            </a>
                        </Link > 
                       
                    </div>
                ))}
            </h1>
        </div>
    )
}
export default Ninjas