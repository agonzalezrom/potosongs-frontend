import React from "react"
import {HeaderComponent} from "../components/Header";
import {CurrentDaySongComponent} from "../components/CurrentDaySong";
import {ListSongsComponent} from "../components/ListSongs";

export const IndexPageComponent = () => {
    return (
        <div className="container mt-5">
            <CurrentDaySongComponent />
            <HeaderComponent />
            <ListSongsComponent />
        </div>
    )
}