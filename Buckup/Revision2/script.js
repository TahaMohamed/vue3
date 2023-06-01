const { createApp } = Vue;
createApp({
    data(){
        return {
            number: 0,
            name: "Taha",
            phone: "029938488",

            username: '',
            email: '',
            password: '',
        }
    },
    methods:{
        increment(){
            return this.number++;
        },
        decrement(){
            return this.number--;
        },
        clickOneTime(){
            console.log("Clicked for once time")
        },
        printName(e){
            console.log(e.type + ', and key code is : ' + e.keyCode)
        },
        register(){
            const userObject = {
                name: this.username,
                email: this.email,
                password: this.password,
            };

            console.log(userObject);
        }
    }
}).mount('#app')