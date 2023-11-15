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
        
        addTask: function(i){
            this.tasks.push(this.newTask);
            console.log(this.tasks, this.tasks.length);
            this.newTask = "";
        },

        deleteTask: function(index){
            this.tasks.splice(index, 1);
            console.log(this.tasks);
        },
    },

    created(){
        
    },
}).mount("#app");