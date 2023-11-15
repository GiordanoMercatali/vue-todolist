const {createApp} = Vue;

createApp({
    data(){
        return{
            tasks: [
                "Wash the dishes",
                "Prepare diner",
                "Pick up kids from school"
            ],

            newTask: "",
        };
    },

    methods:{
        deleteTask: function(){
            console.log("Ciao");
        },

        addTask: function(){
            this.tasks.push(this.newTask);
            this.newTask = "";
        }
    },

    created(){
        
    },
}).mount("#app");