
import app from './app.vue'

Vue.config.productionTip = false //阻止啟動生產訊息

new Vue({
    el: '#vueSpa',
    template: 
    `<div>
        <apple></apple>
    </div>`,
    components: {
        apple: app
    } //左邊是你要用的 html 語意化標籤名稱，右邊是你我們 import 進來時宣告的變數的 vue component
})