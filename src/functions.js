export function timesTwo(number) {
    return number * 2;
}

export function order(items:  Item[]) {
    const total = items.reduce((price, item) => price + item.price, 0);
    return {
        orderItems: items,
        total
    };
}

class Item {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}


