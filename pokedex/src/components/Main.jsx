import React, { useEffect, useState } from 'react'
import Card from './Card'
import PokeInfo from './PokeInfo'

function Main() {
    const [pokeDate, setPokeDate] = useState([])
    // const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState()
    const [prevUrl, setPrevUrl] = useState()
    console.log(pokeDate);

    // const urlId = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`

    // console.log(urlId(2));

    async function pokeFun() {
        // setLoading(true)
        const res = await fetch(url)
        const req = await res.json()
        setNextUrl(req.next)
        setPrevUrl(req.previous)
        // getPokemon(req.results)
        setPokeDate(req.results)
    }

    // const getByIndex = async (i) => {
    //     const res = await fetch(urlId(i))
    //     // return res
    //     const req = await res.json()
    //     return req
    //     // setNextUrl(req.next)
    //     // setPrevUrl(req.previous)
    //     // // getPokemon(req.results)
    //     // setPokeDate(req.results)
    // }

    // console.log(getByIndex(1))

    // const getPokemon = async (req) => {
    //     req.map(async (item) => {
    //         const request = await fetch(item)
    //         const result = await request
    //         setPokeDate(state => [...state, result])

    //     })
    // }



    useEffect(() => {
        pokeFun();
    }, [url])
    return (
        <div className='flex justify-between'>
            <div className='bg-red-500 w-1/2 h-screen'>
                {

                    pokeDate.map((data, index) => (
                        // // 
                        // {
                        //     getByIndex(index)
                        // }
                        < Card
                            key={index}
                            myName={data.name}
                            url={data.url}
                            pic={data.sprites}
                        />
                    ))}
                <div className='flex justify-between'>
                    <button className='bg-red-100'>prev</button>
                    <button className='bg-red-100'>next</button>
                </div>
            </div>
            <div>
                <PokeInfo />
            </div>

        </div >
    )
}

export default Main
