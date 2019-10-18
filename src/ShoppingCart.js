class ShoppingCart {
    constructor (){
        this.items = []
    }
    getItems(){
        return this.items;
    }
    addItem(itemName, quantity, price){
        this.items.push({
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        })
    }
    clear(){
        this.items = [];
    }
    total(){
        return this.items.reduce((acc, val)=> 
            acc + val.quantity * val.pricePerUnit
        , 0)
    }
}

const cart = new ShoppingCart;

module.exports = ShoppingCart;