const { createApp } = Vue;
createApp({
    data(){
        return {
            name: "ahmed",
            age: 29,
            link: '//example.com'
        }
    },
    methods:{
        sayHi(time){
            return "Good " + time + ", " + this.name
        }
    }
}).mount('#app')