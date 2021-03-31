import { useEffect } from "react"

export const getStaticProps = async () =>{
    const response = await fetch (' https://jsonplaceholder.typicode.com/users');
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
                    <div key={ninja.id} >
                        <h4>{ninja.name}</h4>
                        <h5>{ninja.email}</h5>
                    </div>
                ))}
            </h1>
        </div>
    )
}
export default Ninjas