const submit_todo_btn = document.getElementById('submit_todo');
const todo_title_input = document.getElementById('todo_title');
const todo_description_text_area = document.getElementById('todo_description');
const todos_container = document.querySelector('.main-wrapper__todos');
const todos = [];

const renderTodos = todos => {

  todos.forEach(element => {

    const todo_container = document.createElement('div');
    const todo_title = document.createElement('h3');
    const todo_description = document.createElement('p');
    const delTodo = document.createElement('div');

    todo_container.classList.add('todo_container');
    delTodo.classList.add('delTodo');

    todo_title.innerText = element.title;
    todo_description.innerText = element.description;

    todo_container.append(todo_title, todo_description, delTodo);
    todos_container.append(todo_container);

    delTodo.onclick = () => {
      todos.filter((todo) => todo !== element);
      localStorage.setItem('todos', JSON.stringify(todos));
      todo_container.remove();
    };
  });

};

const initApplication = () => {
  if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify([]));
  }

  renderTodos(JSON.parse(localStorage.getItem('todos')));
};

submit_todo_btn.onclick = () => {
  const todo = {
    title: todo_title_input.value,
    description: todo_description_text_area.value
  };

  const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
  let newTodo;

  existingTodos.push(todo);
  localStorage.setItem('todos', JSON.stringify(existingTodos));
  newTodo = existingTodos.slice(existingTodos.length - 1, existingTodos.length);
  renderTodos(newTodo);

  todo_title_input.value = '';
  todo_description_text_area.value = '';

};

const getInputs = () => {
  if (todo_title_input.value.length > 0 && todo_description_text_area.value.length > 0) {
    submit_todo_btn.removeAttribute('disabled');
  } else {
    submit_todo_btn.setAttribute('disabled', true);
  }
};

todo_title_input.oninput = () => {
  getInputs();
};

todo_description_text_area.oninput = () => {
  getInputs();
};

initApplication();
