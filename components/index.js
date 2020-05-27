
import app from './app.vue'

Vue.config.productionTip = false //阻止啟動生產訊息

new Vue({
    el: '#vueSpa',
    template: 
    `<div>
        <app></app>
    </div>`,
    components: { app } //這邊要跟你 import 進來時宣告的變數一樣
})