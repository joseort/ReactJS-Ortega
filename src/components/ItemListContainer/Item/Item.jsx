import { Link } from "react-router-dom"

export const Item = ({product}) => {
  return (
    <div key={product.id} className="card w-25">
                <div className="card-body p-0 text-center">
                    <img src={product.imageUrl} className="w-100" alt="imagen" />
                    <h6>{product.name}</h6>
                    <p>Precio: {product.price}</p>
                    <p>Stock: {product.stock}</p>
                </div>
                <div className="card-footer">
                  <Link to='detail'>
                    <button className="btn btn-outline-dark w-100">Detalles</button>
                  </Link>
                </div>
            </div>
  )
}
