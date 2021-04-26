import React, {useEffect, useState} from "react"
import Axios from "axios";
import {Ul} from "./styles";

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export const ListSongsComponent = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost/api/list_songs").then((response) => {
            if (response.status === 200)
            {
                response.data.forEach((element,index)=>{
                    response.data[index].created_at = new Date(Date.parse(element.created_at))
                })
                setList(response.data)
            }
        })
    }, [])

    const handleClick = element => {
        window.open(element.url, "_blank")
    }

    return (
        <div className="mt-5">
            <Ul>
                {list.map((element, index)=>(
                    <li key={index}>{element.created_at.toLocaleString('es-MX', options)} - {element.username}:
                        <button onClick={(e)=> handleClick(element)} className={element.platform === "Youtube"? "red" : "green"}><i className={element.platform === "Youtube" ? "fab fa-youtube" : "fab fa-spotify"} /></button>
                    </li>
                ))}
            </Ul>
        </div>
    )
}