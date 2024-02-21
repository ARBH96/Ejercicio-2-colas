//Ejercicio 2 eliminar tickets falsos
class Queue{
    constructor(){
        this.queue = [];
    }

    
     // Metodo para agregar un elemento al final 
     enqueue(user){
        this.queue.push(user);
    }
      
      
    // Metodo para remover el primer elemento 
    dequeue(){
        if(this.queue.length >0){
            return this.queue.shift();
        } else{
            return null
        }
      
    }

    peek(){
        if (this.queue.length >0){
            return this.queue[0];
        } else{
            return null
        }
    }
    
    
    // Método para devolver el ultimo elemento 
    back(){
        if (this.queue.length >0) {
            return this.queue[this.queue.length -1];
        } else{
            return null
        }
        
    }
 getSize(){
    return this.queue.length;
 }
} 
 const Ticket = new Queue();
Ticket.enqueue({user:'User1', ticket:true},);
Ticket.enqueue({user:'User2', ticket:true},);
Ticket.enqueue({user:'User3', ticket:false},);
Ticket.enqueue({user:'User4', ticket:true},);
Ticket.enqueue({user:'User5', ticket:false},);
Ticket.enqueue({user:'User6', ticket:false},);
Ticket.enqueue({user:'User7', ticket:true},);
Ticket.enqueue({user:'User8', ticket:true},);
Ticket.enqueue({user:'User9', ticket:true},);
Ticket.enqueue({user:'User10', ticket:false},);
Ticket.enqueue({user:'User11', ticket:true},);
Ticket.enqueue({user:'User12', ticket:true},);
Ticket.enqueue({user:'User12', ticket:true},);
Ticket.enqueue({user:'User13', ticket:false},);
Ticket.enqueue({user:'User14', ticket:false},);

console.log(Ticket);

function tickets(queue){
    const myQueue1 = new Queue();
    const myQueue2 = new Queue();

    const queueOriginalSize = queue.getSize();

    for (let i = 0; i < queueOriginalSize; i++){
        const user = queue.dequeue();

        if(user.ticket === true){
            myQueue1.enqueue(user);
        } else{
            myQueue2.enqueue(user);
        }
    }
    return [myQueue1, myQueue2];
}

const[ conTicket, sinTicket] = tickets(Ticket);
console.log('Los usuarios tienen tickets verdaderos', conTicket);
console.log('Los usuarios tienen tickets falsos', sinTicket);
