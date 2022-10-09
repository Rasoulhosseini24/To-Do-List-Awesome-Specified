const container = document.querySelector('.containerr')
const sec = container.querySelector('.sec')
const add = sec.querySelector('.add')
const lists = container.querySelector('.lists')
const list = lists.querySelector('.list')
const txt = document.getElementById('txt')
const sub = document.getElementById('sub')

let todos = localStorage.getItem('todos')

try {
    todos = JSON.parse(todos)
    todos = todos.length ? todos : null
} catch (e) {
    todos = null
}
if (!todos) {
    todos = [
        "drinking",
        "eating",
        "listening"
    ]

    localStorage.setItem("todos", JSON.stringify(todos))
    myfn(todos)
}


function myfn(todos) {
    list.innerHTML = ""
    todos.forEach((todo, index) => {
        let divv = document.createElement('div')
        divv.className = "coll- items"
        let h33 = document.createElement('h3')
        h33.textContent = todo
        let spann = document.createElement('span')
        let ii = document.createElement('i')
        ii.className = "fa-solid fa-trash-can"
        divv.append(h33)
        divv.append(spann)
        spann.append(ii)
        list.append(divv)

        ii.addEventListener('click', f => {
            todos.splice(index, 1)
            localStorage.setItem("todos", JSON.stringify(todos))
            myfn(todos)
        })
    });
}
myfn(todos)



lists.addEventListener('click', () => {
    txt.style.maxHeight = 8 + "px"
    txt.style.padding = 0
})

txt.addEventListener('click', () => {

    if (txt.value === null) {
        txt.style.maxHeight = 8 + "px"
        txt.style.padding = 0

    } else {
        txt.style.maxHeight = 180 + "px"
        txt.style.padding = 10 + "px"
    }
})


sub.addEventListener('click', () => {

    const listValue = `<div class ="coll- items"><h3>${txt.value}</h3>
<span><i class="fa-solid fa-trash-can" id="trash"></i></span></div>`

    txt.style.maxHeight = 8 + "px"
    txt.style.padding = 0
    if (txt.value === "") {
        window.alert("Please Add Something")

    } else {
        list.innerHTML += listValue
        todos.push(txt.value)
        localStorage.setItem("todos", JSON.stringify(todos))
        myfn(todos)
        txt.value = null
        let trash = document.querySelectorAll('i')
    }
})



