import React from 'react'
import{ useEffect, useState} from "react"

const TiendaApi = () => {
    const [item, setItem] = useState([])

    const getItems = () => {
        const URL= 'https://fakestoreapi.com/products'
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                console.log (data);
                setItem(data)
            })
    }
    useEffect(() => {
        getItems()
    }, [])
    
    const itemElements = item.map(el => {
        return (
            <div key={el.id}>
                <h2>{el.title}</h2>
            </div>
        )
    })
    return(
        <div> 
            <h1>tienda</h1>
            
            {itemElements}
        </div>
    )
}
export default TiendaApi;