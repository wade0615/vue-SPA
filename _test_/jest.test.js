const testingJS = require('../components/app.vue');
// import * as testingJS from '../components/app.vue';
// 我們是在 node 的環境執行測試，所以 import 這 ES6 語法 node 不認識，會沒辦法引入 app.vue 喔

test('firsttry', ()=>{
    expect(testingJS.data().msg).toBe('Hello world!');
})