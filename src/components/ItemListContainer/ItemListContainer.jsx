import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { ItemList } from "./ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const {cid} = useParams()
    useEffect(()=>{
        if (cid) {
            mFetch()
            .then( result => setProductos(result.filter(product => product.category == cid)) )
            .catch(err => console.log(err))
        } else {
            mFetch()
            .then( result => setProductos(result) )
            .catch(err => console.log(err)) 
        }
        
    }, [cid])
    console.log(productos)
    
/*  task
    .then(
        respuestaDelResuelto => {
            //throw new Error('Error en la linea 12')
            console.log(respuestaDelResuelto)
        }, error => console.log(error)* no es el mejor para elegir
    )
    .catch(err => console.log(err))Es mejor utilizar este porque captura tanto error de la promesa como error de codigo */

    return (
        <div>
            <h2>{greeting}</h2>
            {/* {[1,2,3,4].map((num, index) => <li key={index}>{num}</li>)} /* index para no */ }
            <ItemList productos={productos} />
        </div>
    )
}