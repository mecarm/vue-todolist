var app = new Vue({
    el: '#app',
    data: {
        todoList:[ 
            {
                testo: 'Imparare HTML'
            },
            {
                testo: 'Imparare CSS'
            },
            {
                testo: 'Imparare JavaScript'
            },
            {
                testo: 'Imparare Vue.js'
            },
            {
                testo: 'Imparare PHP & MYSQL'
            },
            {
                testo: 'Imparare Laravel'
            }
        ],
        taskCompleted: []
    },
    methods: {
        taskCompletata(param){
            //per rimuover oggetto dall'array uso splice() dove il param sarà l'index cliccato di riferimento (ad esempio clicco il secondo che avrà index 1) che sara rimosso dall'array
            this.todoList.splice(param, 1);
            this.taskCompleted.push(param);
        }
    }
})
