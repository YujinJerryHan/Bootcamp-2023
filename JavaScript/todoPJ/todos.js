let input = prompt('뭐 할겨?');
let todo = ['문풀하기', '청소하기'];
while (input !== '그만' && input !== 'q') {
  if (input === 'list') {
    console.log('**************');
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i}: ${todo[i]}`);
    }
    console.log('**************');
  } else if (input == 'new') {
    const newTodo = prompt('Ok, 어떤 걸 추가할래?');
    todo.push(newTodo);
    console.log(`${newTodo} 가 추가 되었슴`);
  } else if (input === 'delete') {
    const index = prompt('Ok, enter an index to delete.');
    const deleted = todo.splice(index, 1);
    console.log(`ok, deleted '${deleted}'`);
  }
  input = prompt('뭐 할겨?');
}
console.log('알써. 앱 끈다.');
