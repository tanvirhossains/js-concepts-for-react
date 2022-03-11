// module 42-3 (array methods map, filter, find ,forEach)


const products = [
    {name:'laptop', price:2300, brand:'lenevo', color:'silver'},
    {name:'phone', price:1300, brand:'iphone', color:'black'},
    {name:'watch', price:300, brand:'casio', color:'blue'},
    {name:'headPhone', price:1000, brand:'walton', color:'whita'},
    {name:'sunGlass', price:800, brand:'specless', color:'silver'},
    {name:'mouse', price:500, brand:'HP', color:'whiteblue'},
    {name:'keyboard', price:350, brand:'logictic', color:'yellow'}
]


const brandName = products.map(brand => brand.brand)
console.log(brandName)

//2. forEach 




//3. filter (all matched will show )

const cheap = products.filter(product =>product.price<= 1000)
console.log('price name,',cheap)

const specificName = products.filter(product => product.name.includes('n'))
console.log('Specific name',specificName)


//4.find  (first one will show only )
const special = products.find(product => product.price)
console.log('special:-', special)