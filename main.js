// Sistema de Tareas
class TaskManager {
    constructor() {
        this.tasks = [];
    }

    agregarTarea(nombreTarea) {
        if (nombreTarea) {
            const nuevaTarea = {
                id: this.tasks.length + 1,
                nombre: nombreTarea,
                completada: false
            };
            this.tasks.push(nuevaTarea);
            this.mostrarTareas();
        }
    }

    eliminarTarea(idTarea) {
        this.tasks = this.tasks.filter(tarea => tarea.id !== idTarea);
        this.mostrarTareas();
    }

    completarTarea(idTarea) {
        const tarea = this.tasks.find(tarea => tarea.id === idTarea);
        if (tarea) {
            tarea.completada = !tarea.completada;
            this.mostrarTareas();
        }
    }

    mostrarTareas() {
        const listaTareasElement = document.getElementById('listaTareas');
        listaTareasElement.innerHTML = '';

        this.tasks.forEach(tarea => {
            const tareaElemento = document.createElement('li');
            tareaElemento.className = tarea.completada ? 'completada' : '';
            tareaElemento.innerHTML = `
                ${tarea.nombre}
                <div>
                    <button onclick="completarTarea(${tarea.id})">✔</button>
                    <button onclick="eliminarTarea(${tarea.id})">✖</button>
                </div>
            `;
            listaTareasElement.appendChild(tareaElemento);
        });
    }
}

const gestorTareas = new TaskManager();


function agregarTarea() {
    const inputTarea = document.getElementById('inputTarea');
    const nombreTarea = inputTarea.value.trim();
    if (nombreTarea) {
        gestorTareas.agregarTarea(nombreTarea);
        inputTarea.value = '';
    } else {
        alert("Por favor, ingresa una tarea válida.");
    }
}

function eliminarTarea(idTarea) {
    gestorTareas.eliminarTarea(idTarea);
}

function completarTarea(idTarea) {
    gestorTareas.completarTarea(idTarea);
}
