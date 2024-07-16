<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-box">
                <router-link class="footer-logo logo" to="/">
                    <img src="../assets/images/logo.png" alt="Логотип Delivery Food">
                </router-link>

                <nav class="footer-nav">
                    <ul class="footer-nav--list">
                        <li class="footer-nav--item">
                            <router-link class="footer-nav--link" to="/">Ресторанам</router-link>
                        </li>
                        <li class="footer-nav--item">
                            <router-link class="footer-nav--link" to="/">Курьерам</router-link>
                        </li>
                        <li class="footer-nav--item">
                            <router-link class="footer-nav--link" to="/">Пресс-центр</router-link>
                        </li>
                        <li class="footer-nav--item">
                            <router-link class="footer-nav--link" to="/">Контакты</router-link>
                        </li>
                    </ul>
                </nav>

                <div class="footer-social">
                    <ul class="footer-social--list">
                        <li class="footer-social--item">
                            <router-link class="footer-social--link" to="/">
                                <img src="../assets/images/social/instagram.svg" alt="Instagram">
                            </router-link>
                        </li>
                        <li class="footer-social--item">
                            <router-link class="footer-social--link" to="/">
                                <img src="../assets/images/social/facebook.svg" alt="Facebook">
                            </router-link>
                        </li>
                        <li class="footer-social--item">
                            <router-link class="footer-social--link" to="/">
                                <img src="../assets/images/social/vk.svg" alt="Vk">
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
</script>

<style scoped>
.footer {
    display: flex;
    align-items: center;
    min-height: 156px;
    padding: 60px 0;
}

.footer-box {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 36px;
}

.footer-nav {
    flex-grow: 1;
}

.footer-nav--list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-nav--link {
    text-decoration: none;
    font-size: 18px;
    color: #595959;
}

.footer-social--list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    list-style: none;
}
</style>