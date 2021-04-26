import React, {useState} from "react"

export const CurrentDaySongComponent = () => {

    const [genre] = useState(()=>{
        const days = [
            'Salsa, Cumbia, Bachata, Baladas',
            'Rp, Hip-Hop, Trap',
            'Jazz, Blues, R&B, Soul, Ska',
            'Electro, Techno, House, Disco',
            'Reggaeton, Reggae, Pop',
            'Rock, Punk, Metal, Los géneros raros del Tex, Indie',
            'Regionales, (Banda ranchera, Criollas, Chinca, etc) Típicos (Huaynos, Huapango, etc)',
        ]
        const currentDay = new Date()
        return days[ (currentDay.getDay() + 5)%7]
    })

    return (
        <>
            <h1>Los géneros de hoy son: {genre}</h1>
        </>
    )
}