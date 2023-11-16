import { useEffect, useState } from "react"
import { mFetch } from "../../helpers/mFetch"
import { ItemDetail } from "./ItemDetail"

export const ItemDetailContainer = () => {
  const [product, setproduct] = useState({})

  useEffect(() => {
      mFetch('1')
        .then(res => setproduct(res))
        .catch(err => console.log('Error: ', err))
  }, [])

  return (
    <ItemDetail product={product}/>
  )
}
