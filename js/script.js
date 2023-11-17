const {createApp} = Vue;

createApp({
    data(){
        return{
            tasks: [
                {
                    description: "Wash the dishes",
                    done: false,
                },

                {
                    description: "Prepare diner",
                    done: false,
                },

                {
                    description: "Pick up kids from school",
                    done: false,
                },
                
            ],

            newTask: {
                description: "",
                done: false,
            },
        };
    },

    methods:{
        
        addTask: function(){

            if (this.newTask.description !== ""){
                this.tasks.push(this.newTask);                
            } else{
                alert("Write something...");
            }

            this.newTask = {
                description: "",
                done: false,
            };  
        },

        deleteTask: function(index){
            this.tasks.splice(index, 1);
        },
    },

    created(){
        
    },
}).mount("#app");