/*
Partire dalla definizione di un array con 3 oggetti ( i todo).
Ogni oggetto todo avrà le seguenti proprietà:
- text, una stringa che indica il testo del todo
- completed, un booleano (true/false) che indica se il todo è stato completato oppure no
MILESTONE 1
Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà completed è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco di ogni todo una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto
 e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1. Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista.
2. Cliccando sul testo del todo, invertire il valore della proprietà completed del todo corrispondente (se completed era uguale a false, impostare true e viceversa).
*/



const app = new Vue({
    el: '#app',

    data: {

        todos: [
            {
                text: 'Finire esercizio di oggi ',
                completed: false,
            },
            {
                text: 'Accendere il fuoco ',
                completed: true,
            },
            {
                text: 'Lavare i piatti',
                completed: false,
            },
        ],

        newTodo: '',
    },

    methods: {
        //cliccando sul cestino rimuovo il todo
        todoRemove(index){
            console.log(index);
            this.todos.splice(index, 1)
        },

        //aggiungo nuovi to-do

        addNewTodo(){
            if(this.newTodo !== '') {
                console.log(this.newTodo);

                //aggiungo alla lista
                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                });

                //cancello
                this.newTodo = '';
            }
            
        },

        // cliccando su un todo lo rendo completato o no
        changeComplete(index) {
            this.todos[index].completed = !this.todos[index].completed
        }
    }
})