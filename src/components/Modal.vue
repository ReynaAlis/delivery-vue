<template>
    <div class="cart-modal__overlay" :class="{ open: isOpen }" @click.self="closeModal()">
        <div class="cart-modal">
            <div class="cart-modal__header">
                <h2 class="cart-modal__header--title">Корзина</h2>
                <span class="cart-modal__header--close" @click="closeModal()">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.0035 13L25.3506 3.65245C25.6077 3.39513 25.7496 3.05184 25.75 2.68578C25.75 2.31952 25.6081 1.97582 25.3506 1.71891L24.5315 0.900011C24.274 0.642084 23.9307 0.500824 23.5642 0.500824C23.1984 0.500824 22.8551 0.642084 22.5976 0.900011L13.2504 10.247L3.90285 0.900011C3.64573 0.642084 3.30224 0.500824 2.93598 0.500824C2.57012 0.500824 2.22663 0.642084 1.96951 0.900011L1.15 1.71891C0.616667 2.25225 0.616667 3.11973 1.15 3.65245L10.4974 13L1.15 22.3472C0.892683 22.6049 0.751016 22.9482 0.751016 23.3142C0.751016 23.6803 0.892683 24.0236 1.15 24.2811L1.96931 25.1C2.22642 25.3577 2.57012 25.4992 2.93577 25.4992C3.30203 25.4992 3.64553 25.3577 3.90264 25.1L13.2502 15.7529L22.5974 25.1C22.8549 25.3577 23.1982 25.4992 23.564 25.4992H23.5644C23.9305 25.4992 24.2738 25.3577 24.5313 25.1L25.3504 24.2811C25.6075 24.0238 25.7494 23.6803 25.7494 23.3142C25.7494 22.9482 25.6075 22.6049 25.3504 22.3474L16.0035 13Z"
                            fill="black" />
                    </svg>
                </span>
            </div>
            <div class="cart-modal__body">
                <div v-for="item in cart" :key="item.id" class="cart-item">
                    <p class="cart-item__title">{{ item.title }}</p>
                    <div class="cart-item__controls">
                        <div class="cart-item__controls--price">{{ item.price }} ₽</div>
                        <button class="btn btn-outline" @click="updateQuantity(item, -1)">-</button>
                        <div class="cart-item__controls--count">{{ item.quantity }}</div>
                        <button class="btn btn-outline" @click="updateQuantity(item, 1)">+</button>
                    </div>
                </div>
            </div>
            <div class="cart-modal__footer">
                <div class="cart-modal__footer--price">{{ totalPrice }} ₽</div>
                <div class="cart-modal__footer--controls">
                    <button class="btn btn-primary">Оформить заказ</button>
                    <button class="btn btn-outline" @click="closeModal()">Отмена</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { store } from "../store/index.js";
import { computed } from "vue";

const props = defineProps({ isOpen: Boolean });
const emit = defineEmits(["toggleModal"]);
const closeModal = () => emit("toggleModal");

const cart = computed(() => store.cart);

const updateQuantity = (item, amount) => {
    store.updateQuantity(item, amount);
};

const totalPrice = computed(() => {
  return store.cart.reduce((total, item) => total + item.price * item.quantity, 0);
});
</script>

<style scoped>
.cart-modal__overlay {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
}

.cart-modal__overlay.open {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cart-modal {
    width: 100%;
    max-width: 780px;
    border-radius: 5px;
    background-color: #fff;
    padding: 40px 45px;
}

.cart-modal__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 48px;
}

.cart-modal__header--title {
    font-weight: 700;
    font-size: 36px;
    margin: 0;
}

.cart-modal__header--close {
    cursor: pointer;
}

.cart-modal__body {
    margin-bottom: 50px;
}


.cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
}

.cart-item:not(:last-child) {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #d9d9d9;
}

.cart-item__title {
    font-size: 18px;
    line-height: 1.78;
    margin: 0;
}

.cart-item__controls {
    display: flex;
    align-items: center;
}

.cart-item__controls--price {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.6;
    margin-right: 47px;
}

.cart-item__controls button {
    border: 1px solid #40a9ff;
    padding: 5px 16px;
    color: #40a9ff;
}

.cart-item__controls--count {
    margin-left: 15px;
    margin-right: 15px;
    line-height: 1.5;
}



.cart-modal__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
}

.cart-modal__footer--price {
    border-radius: 5px;
    padding: 15px 20px;
    background-color: #262626;
    color: #fafafa;
    font-weight: 700;
    font-size: 20px;
}

.cart-modal__footer--controls {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>