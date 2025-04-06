document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Red Flower', img: './assets/menu/product-1.jpeg', price: 99000 },
            { id: 2, name: 'White Flower', img: './assets/menu/product-2.jpeg', price: 199000 },
            { id: 3, name: 'Blue Flower', img: './assets/menu/product-3.jpeg', price: 399000 },
            { id: 4, name: 'Combined Flower', img: './assets/menu/product-4.jpeg', price: 599000 },
        ],
    }));
    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newitem) {
            // Check if item already exists in cart
            const existingItem = this.items.find(item => item.id === newitem.id);
            if (!existingItem) {
                this.items.push({ ...newitem, quantity: 1, total: newitem.price });
                this.quantity++;
                this.total += newitem.price;            
            }else {
                this.items = this.items.map(item => {
                    if (item.id !== newitem.id) {
                        return item;
                    }else {
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity++;
                        this.total += item.price;
                        return item;
                    }
                });   
            }
        },
        remove(id){
            // Check if item exists in cart
            const existingItem = this.items.find(item => item.id === id);
           // if item more than 1, reduce quantity and total
            if (existingItem) {
                this.items = this.items.map(item => {
                    if (item.id !== id) {
                        return item;
                    }else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                });
                // if quantity is 0, remove item from cart
                this.items = this.items.filter(item => item.quantity > 0);
            }
        }
    });
});
