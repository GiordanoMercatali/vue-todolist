const {createApp} = Vue;

createApp({
    data(){
        return{
            tasks: [
                {
                    task_desc: "Wash the dishes",
                    task_done: false,
                },

                {
                    task_desc: "Prepare diner",
                    task_done: false,
                },

                {
                    task_desc: "Pick up kids from school",
                    task_done: false,
                },
                
            ],

            newTask: {
                task_desc: "",
                task_done: false,
            },
        };
    },

    methods:{
        
        addTask: function(){

            if (this.newTask.task_desc !== ""){
                this.tasks.push(this.newTask);                
            } else{
                alert("Write something...");
            }

            this.newTask = "";    
        },

        deleteTask: function(index){
            this.tasks.splice(index, 1);
        },
    },

    created(){
        
    },
}).mount("#app");