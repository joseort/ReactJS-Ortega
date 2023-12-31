
export const ItemDetail = ({product}) => {
  return (
    <div className="row">
        <div className="col-12 text-center mt-5">
            <h2>Detalle del Producto</h2>
        </div>
        <div className="col-6 text-center mt-5">
            <img src={product.imageUrl} alt={product.name} className="img-fluid" />
            <h3>{product.name}</h3>
        </div>

        <div className="col-6 mt-5">
            <h4>Descripcion: {product.description}</h4>
            <h4>Precio: {product.price}</h4>
            <h4>Stock: {product.stock}</h4>
        </div>
    </div>
  )
}
