function getList() {
    var list = [];
    var listStr = localStorage.getItem('todo');
    if (listStr !== null) {
        list = JSON.parse(listStr);
    }
    return list;
}
function add() {
    var addTodo = document.getElementById('addCase').value;
    if (addTodo === '') {alert('Введите задачу!!!')}
    else {
    var todos = getList() }
    todos.push(addTodo);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}
function show() {
    var todos = getList();
    var todoStr = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        todoStr += '<li>' + '<input class="check" type="checkbox"/>' + todos[i] + '</li>'
    }
    todoStr += '</ul>';
    document.getElementById('todo').innerHTML = todoStr;
    /*
    var buttons = document.getElementsByClassName('check');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', removeCase);
}
function removeCase() {
*/
}
function removeAll() {
    localStorage.clear('todo');
    show();
}
document.getElementById('removeAll').addEventListener('click', removeAll);
document.getElementById('add').addEventListener('click', add);
show();
