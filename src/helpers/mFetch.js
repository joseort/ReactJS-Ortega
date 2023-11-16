
const products = [
    {id: '1', name:'Nike', category:'Deportivo', price:10000, stock:10, description:'lorem ipsum dolor sit amet', imageUrl:'https://mariohernandez.vtexassets.com/arquivos/ids/213576-800-auto?v=637909856419300000&width=800&height=auto&aspect=true'},
    {id: '2', name:'Adidas', category:'Casual', price:11000, stock:14, description:'lorem ipsum dolor sit amet', imageUrl:'https://mariohernandez.vtexassets.com/arquivos/ids/213858-800-auto?v=637917023096100000&width=800&height=auto&aspect=true'},
    {id: '3', name:'Carter', category:'Clasicos', price:9000, stock:6, description:'lorem ipsum dolor sit amet', imageUrl:'https://mariohernandez.vtexassets.com/arquivos/ids/227096-800-auto?v=638351452954200000&width=800&height=auto&aspect=true'},
    {id: '4', name:'StyleShoes', category:'Elegantes', price:16000, stock:16, description:'lorem ipsum dolor sit amet', imageUrl:'https://mariohernandez.vtexassets.com/arquivos/ids/227096-800-auto?v=638351452954200000&width=800&height=auto&aspect=true'},
    {id: '5', name:'Mckain', category:'Botas', price:14000, stock:15, description:'lorem ipsum dolor sit amet', imageUrl:'https://mariohernandez.vtexassets.com/arquivos/ids/199602-800-auto?v=637369158232470000&width=800&height=auto&aspect=true'}
]


export const mFetch = (id) => new Promise((res, rej)=>{
        //acciones
        setTimeout(() => {
            res(id ? products.find(product => product.id == id) : products)
        }, 1500);
        
        //res("toma lo que me prestaste")
        //rej('No te puedo devolver el dinero')
    })