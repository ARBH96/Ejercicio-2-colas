//Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra.

//C ola original: [amarillo, rosa, verde, negro, modrado,blanco]

class Queue{
    constructor(){
        this.items = []
    }

    // Metodo para verificar si la cola esta vacia
    isEmpty(){
        return this.items.length === 0;
    }

     // Metodo para agregar un elemento al final de la lista
     enqueue(elemento){
        this.items.push(elemento)
    }
      
    // Método para modificar el primer elemento de la cola sin removerlo
      modFront(dato){
        if(this.isEmpty()){
            return 'Cola vacia'
        }
        return this.items[0] = dato
    }

    // Método para devolver el ultimo elemento de la cola sin removerlo
    back(){
        if (this.isEmpty()) {
            return "La cola está vacía";
        }
        return this.items[this.items.length - 1]
    }

      
    // Metodo para remover el primer elemento de la cola
       dequeue(){
        if(this.isEmpty()){
            return "La cola esta vacia";
        }
        return this.items.shift();
    }

    // Metodo para saber la cantidad de elementos en la cola
    size(){
        return this.items.length
    }

    // Metodo para imprimir la informacion
    print(){
        console.log(this.items.join(" "));
    }
}

const cola = new Queue()

cola.enqueue('amarillo')
cola.enqueue('verde')
cola.enqueue('morado')


cola.print()

const cola1 = new Queue()
cola.enqueue('rosa')
cola.enqueue('negro')
cola.enqueue('blanco')
cola.print()

cola.size();
cola.dequeue('rosa')
cola.dequeue('negro')
cola.dequeue('blanco')
cola.print()