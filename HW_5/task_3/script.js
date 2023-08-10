const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

let discount = 15;

const saleTemplate = (object, discount) => {
    object.forEach(element => {
        element.price -= (discount * element.price / 100)
    });
}

saleTemplate(products, discount);
console.log(products);