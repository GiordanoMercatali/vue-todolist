const {createApp} = Vue;

createApp({
    data(){
        return{
            tasks: [
                "Wash the dishes",
                "Prepare diner",
                "Pick up son from school"
            ],
        };
    },

    methods:{
    },

    created(){
        
    },
}).mount("#app");