import { reactive } from 'vue';
import { restArray } from '@/constants/rests';

export const store = reactive({
    isOpen: false,
    cart: [],
    rests: restArray,
    
    toggleModal(value) {
        this.isOpen = value;
    },
    addToCart(goods) {
        const item = this.cart.find(item => item.id === goods.id);
        if (item) {
            item.quantity++;
        } else {
            this.cart.push({ ...goods, quantity: 1 });
        }
    },
    updateQuantity(item, amount) {
        const cartItem = this.cart.find(cartItem => cartItem.id === item.id);
        if (cartItem) {
            cartItem.quantity += amount;
            if (cartItem.quantity <= 0) {
                this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
            }
        }
    }
});
