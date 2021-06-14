'use strict'
window.addEventListener('load', () => {
    const task = document.getElementById('task');
    const addTask = document.getElementById('addTask');
    const list = document.querySelector('#list');


    const newTask = () => {
        if (task.value === '') {
            alert('insert something....')
            return;
        }
        const newElement = document.createElement('li');
        const newSpan = document.createElement('span');
        newSpan.classList.add('close');
        newSpan.textContent = '\u00d7'
        newElement.textContent = task.value;
        task.value = '';
        newElement.appendChild(newSpan);
        list.appendChild(newElement);
    }

    list.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked')
        } else if (e.target.tagName === 'SPAN') {
            list.removeChild(e.path[1]);
        }
    })

    addTask.addEventListener('click', newTask);
    window.addEventListener('keypress', (e) => {
        if (e.code !== 'Enter') {
            return;
        }
        newTask();
    })

})