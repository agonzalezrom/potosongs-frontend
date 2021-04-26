import React, {useState} from "react"
import Axios from "axios"
import swal from "sweetalert"

import {Header} from "./styles"

export const HeaderComponent = () => {

    const [username, setUsername] = useState("")
    const [url, setUrl] = useState("")
    const [platform, setPlatform] = useState("Youtube")

    const HandleSubmit = () => {
        const data = new FormData()
        data.append("username", username)
        data.append("url", url)
        data.append("platform", platform)

        Axios.post("http://localhost/api/list_songs", data, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "multipart/form-data"
            }
        }).then((response)=> {
            if(response.status === 201)
            {
                swal({
                    title: "Chingón",
                    text: "Su canción fue enviada con éxito",
                    icon: "success",
                    buttons: false,
                    timer: 1*1000
                }).then((e)=>{
                    window.location.reload()
                })
            }
        })
    }

    return (
        <Header>
            <div className="row">
                <div className="col-md-3 mt-3">
                    <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder="Tu nombre" className="form-control"/>
                </div>
                <div className="col-md-3 mt-3">
                    <input onChange={(e)=>setUrl(e.target.value)}  value={url} type="text" placeholder="Tu url" className="form-control" />
                </div>
                <div className="col-md-3 mt-3">
                    <select onChange={(e)=>setPlatform(e.target.value)}  value={platform} className="form-control">
                        <option value="Youtube">Youtube</option>
                        <option value="Spotify">Spotify</option>
                    </select>
                </div>
                <div className="col-md-3 mt-3">
                    <div className="d-flex justify-content-center">
                        <button onClick={HandleSubmit} className="btn btn-primary">Enviar mi canción</button>
                    </div>
                </div>
            </div>
        </Header>
    )
}