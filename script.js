const {createApp} = Vue;
createApp({
    data() {
        return {
            numberOne: 0,
            numberTwo: 0,
        }
    },
    methods: {
        multiply() {
            console.log("Fired from multiply");
            return this.numberOne * 2;
        },
        summision() {
            console.log("Fired from summision");
            return this.numberTwo + 2;
        }
    },
    computed: {
        multiplyComputed() {
            console.log("Fired from multiply Computed");
            return this.numberOne * 2;
        },
        summisionComputed() {
            console.log("Fired from summision Computed");
            return this.numberTwo + 2;
        }
    }
}).mount('#app')