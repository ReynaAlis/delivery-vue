<template>
    <div class="container">
        <div class="products-wrapper" id="rests-container">
            <div class="products-card" v-for="goods in goodsArray" :key="goods.id">
                <div class="products-card__image">
                    <img :src="getUrl(goods.image)" :alt="`${goods.title}`" />
                </div>
                <div class="products-card__description">
                    <div class="products-card__description-row">
                        <h5 class="products-card__description--name">{{ goods.title }}</h5>
                    </div>
                    <div class="products-card__description-row">
                        <p class="products-card__description--text">
                            {{ goods.description }}
                        </p>
                    </div>
                    <div class="products-card__description-row">
                        <div class="products-card__description-controls">
                            <button class="btn btn-primary" @click="addToCart(goods)" :disabled="isAdded(goods)">
                                {{ isAdded(goods) ? 'Товар добавлен' : 'В корзину' }}
                                <svg v-if="!isAdded(goods)" width="16" height="25" viewBox="0 0 16 25" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.4202 15.7302H5.11549L5.58268 14.7786L13.3452 14.7646C13.6077 14.7646 13.8327 14.5771 13.8796 14.3177L14.9546 8.3005C14.9827 8.14269 14.9405 7.98019 14.8374 7.85675C14.7864 7.796 14.7228 7.74707 14.6511 7.71334C14.5793 7.67961 14.501 7.6619 14.4217 7.66144L4.54674 7.62863L4.46237 7.23175C4.40924 6.97863 4.18112 6.79425 3.92174 6.79425H1.50768C1.36139 6.79425 1.2211 6.85236 1.11766 6.9558C1.01423 7.05924 0.956116 7.19953 0.956116 7.34581C0.956116 7.4921 1.01423 7.63239 1.11766 7.73583C1.2211 7.83926 1.36139 7.89738 1.50768 7.89738H3.47487L3.84362 9.6505L4.75143 14.0458L3.58268 15.9536C3.52198 16.0355 3.48543 16.1328 3.47714 16.2344C3.46886 16.336 3.48918 16.438 3.5358 16.5286C3.62955 16.7146 3.81862 16.8318 4.02799 16.8318H5.00924C4.80005 17.1096 4.68706 17.448 4.68737 17.7958C4.68737 18.6802 5.40612 19.3989 6.29049 19.3989C7.17487 19.3989 7.89362 18.6802 7.89362 17.7958C7.89362 17.4474 7.77799 17.1083 7.57174 16.8318H10.0889C9.87974 17.1096 9.76675 17.448 9.76705 17.7958C9.76705 18.6802 10.4858 19.3989 11.3702 19.3989C12.2546 19.3989 12.9733 18.6802 12.9733 17.7958C12.9733 17.4474 12.8577 17.1083 12.6514 16.8318H14.4217C14.7249 16.8318 14.9733 16.5849 14.9733 16.2802C14.9724 16.1341 14.9137 15.9942 14.8101 15.8912C14.7065 15.7881 14.5663 15.7303 14.4202 15.7302V15.7302ZM4.77643 8.71613L13.7733 8.74581L12.8921 13.6802L5.82487 13.6927L4.77643 8.71613ZM6.29049 18.2896C6.01862 18.2896 5.79674 18.0677 5.79674 17.7958C5.79674 17.5239 6.01862 17.3021 6.29049 17.3021C6.56237 17.3021 6.78424 17.5239 6.78424 17.7958C6.78424 17.9268 6.73222 18.0524 6.63962 18.1449C6.54703 18.2375 6.42144 18.2896 6.29049 18.2896V18.2896ZM11.3702 18.2896C11.0983 18.2896 10.8764 18.0677 10.8764 17.7958C10.8764 17.5239 11.0983 17.3021 11.3702 17.3021C11.6421 17.3021 11.8639 17.5239 11.8639 17.7958C11.8639 17.9268 11.8119 18.0524 11.7193 18.1449C11.6267 18.2375 11.5011 18.2896 11.3702 18.2896V18.2896Z"
                                        fill="white" />
                                </svg>
                            </button>
                            <span class="products-card__description-controls-price">{{ goods.price }} ₽</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { store } from '../store/index.js';
import { goodsArray } from '../constants/goods.js';

const getUrl = (name) => {
    return new URL(`../assets/images/goods/${name}`, import.meta.url);
};

const addToCart = (goods) => {
    store.addToCart(goods);
};

const isAdded = (goods) => {
    return store.cart.some(item => item.id === goods.id);
};
</script>