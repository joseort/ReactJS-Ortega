
const products = [
    {id: '1', name:'Nike', category:'Hombre', price:10000, stock:10, description:'lorem ipsum dolor sit amet', imageUrl:'https://mariohernandez.vtexassets.com/arquivos/ids/216090-800-auto?v=637980900856700000&width=800&height=auto&aspect=true'},
    {id: '2', name:'Adidas', category:'Mujer', price:11000, stock:14, description:'lorem ipsum dolor sit amet', imageUrl:'https://mariohernandez.vtexassets.com/arquivos/ids/227174-800-auto?v=638352349812130000&width=800&height=auto&aspect=true'},
    {id: '3', name:'Carter', category:'Hombre', price:9000, stock:6, description:'lorem ipsum dolor sit amet', imageUrl:'https://mariohernandez.vtexassets.com/arquivos/ids/167495-800-auto?v=636319193358230000&width=800&height=auto&aspect=true'},
    {id: '4', name:'StyleShoes', category:'Mujer', price:16000, stock:16, description:'lorem ipsum dolor sit amet', imageUrl:'https://mariohernandez.vtexassets.com/arquivos/ids/227189-800-auto?v=638352360240400000&width=800&height=auto&aspect=true'},
    {id: '5', name:'Mckain', category:'Hombre', price:14000, stock:15, description:'lorem ipsum dolor sit amet', imageUrl:'https://mariohernandez.vtexassets.com/arquivos/ids/221971-800-auto?v=638179474213200000&width=800&height=auto&aspect=true'},
    {id: '6', name:'Mckain', category:'Mujer', price:14000, stock:15, description:'lorem ipsum dolor sit amet', imageUrl:'https://mariohernandez.vtexassets.com/arquivos/ids/226986-800-auto?v=638344699786400000&width=800&height=auto&aspect=true'}
]


export const mFetch = (id) => new Promise((res, rej)=>{
        //acciones
        setTimeout(() => {
            res(id ? products.find(product => product.id == id) : products)
        }, 1000);
        
        //res("toma lo que me prestaste")
        //rej('No te puedo devolver el dinero')
    })