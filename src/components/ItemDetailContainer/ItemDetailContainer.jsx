import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
  const [product, setproduct] = useState({})
  const {pid} = useParams()

  useEffect(() => {
      mFetch(pid)
        .then(res => setproduct(res))
        .catch(err => console.log('Error: ', err))
  }, [])

  return (
    <ItemDetail product={product}/>
  )
}
