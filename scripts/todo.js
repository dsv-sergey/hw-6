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
    document.getElementById('addCase').value = '';
    show();
    return false;
}
function show() {
    var todos = getList();
    var todoStr = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        todoStr += '<li>' + '<input class="check_line" type="checkbox"  onclick=/>' + todos[i] + '</li>'
    }
    todoStr += '</ul>';

    document.getElementById('todo').innerHTML = todoStr;

}
function removeSelect(){
    var rem = [].filter.call(document.querySelectorAll('ul > li > input'),function (element) {
        return element;
    });
    for (var i = 0; i < rem.length; i++) {
        if (this.children.childNodes["i"].childNodes["i"].value == 'on') rem.parentNode.removeChild(rem);
    }
}
function deleteSel() {
    var del = document.querySelectorAll('ul > li');
    for (var i = 0; i < del.length; i++) {
        if (this.children[i] == 'checked') {
            this.value = '';
        }
    }

}
function removeAll() {
    localStorage.clear('todo');
    show();
}
document.getElementById('removeSelect').addEventListener('click', deleteSel)
document.getElementById('todo').addEventListener('click', removeSelect);
document.getElementById('removeAll').addEventListener('click', removeAll);
document.getElementById('add').addEventListener('click', add);
show();
