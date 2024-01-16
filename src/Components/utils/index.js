

export const totalPrice = (products) => {
    return products.reduce((total, product)=>{
        return total + product.price;   
    },0).toFixed(2);
}