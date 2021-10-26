// Vue.component('button-counter', {
//     data() {
//         return {
//             counter: 1,
//         }
//     },
//     template: '<button  @click="counter++">You clicked me {{ counter }} times</button>',
// });
Vue.component('button-counter', {
    data() {
        return {
            counter: 1,
        }
    },

    methods: {
        incrementByOne: function (counter) {
            this.counter += 1;
        },
    },


    template: '<button  @click="incrementByOne">You clicked me {{ counter }} times</button>',
});



new Vue({
    el: '.root',
});