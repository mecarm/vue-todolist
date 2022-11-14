var app = new Vue({
    el: '#app',
    data: {
        todoList:[ 
            {
                testo: 'Imparare HTML',
                done : false
            },
            {
                testo: 'Imparare CSS',
                done : false
            },
            {
                testo: 'Imparare JavaScript',
                done : false
            },
            {
                testo: 'Imparare Vue.js',
                done : false
            },
            {
                testo: 'Imparare PHP & MYSQL',
                done : false
            },
            {
                testo: 'Imparare Laravel',
                done : false
            },
            
        ],
        taskCompleted: [],
    },
    methods: {
        taskCompletata(param, indice){
            //per rimuover oggetto dall'array uso splice() dove il param sarà l'index cliccato di riferimento (ad esempio clicco il secondo che avrà index 1) che sara rimosso dall'array
            this.todoList.splice(indice, 1);
            //Funzione per pushare nell'array taskCompleted il parametro inserito nell'HTML ad esmpio element del ciclo for
            this.taskCompleted.push(param);
        },
        inputTask() {
            let inputField = document.getElementById('inputUtente').value;
            if (inputField == ''){
                alert('Il campo non può essere vuoto')
            }
            else{
                this.todoList.push({testo: `${inputField}`, done: false})
            }
          },
    } 
})
