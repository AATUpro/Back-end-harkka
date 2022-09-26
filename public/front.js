function readGame(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "/gamelibrary",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    const gamelibrary = JSON.parse(xmlhttp.responseText);
     let table = document.createElement('table');
     for (let i = 0; i < gamelibrary.length; i++) {
      let newRow = document.createElement('tr');
      newRow.appendChild(createCell(gamelibrary[i].name));
      newRow.appendChild(createCell(gamelibrary[i].publisher));
      newRow.appendChild(createCell(gamelibrary[i].platform));
      newRow.appendChild(createCell(gamelibrary[i].added));
      newRow.appendChild(createCell(gamelibrary[i].genre));
      newRow.appendChild(createCell(gamelibrary[i].details));
      newRow.appendChild(createCell(gamelibrary[i].released));
      newRow.appendChild(createForm(gamelibrary[i], 'update'));
      newRow.appendChild(createForm(gamelibrary[i], 'delete'));
      table.appendChild(newRow);
     }
     document.getElementById("demo").appendChild(table);

        }
    }

function createCell(value) {
  let newCell = document.createElement('td');
  newCell.innerHTML = value;
  return newCell;
}
    }
    readGame();

function createForm(game, action) {
  let newCell = document.createElement('td');
  let form = document.createElement('form');
  form.method = (action == 'delete') ? 'POST' : 'GET';
  form.action = (action == 'delete') ? '/deleteGame' : '/updateGame.html';
  
  let input = document.createElement('input');
  input.value = game._id;
  input.type = 'hidden'
  input.name = '_id'
  form.appendChild(input);

  input = document.createElement('input');
  input.value = game.name;
  input.type = 'hidden'
  input.name = 'name'
  form.appendChild(input);

  input = document.createElement('input');
  input.value = game.publisher;
  input.type = 'hidden'
  input.name = 'publisher'
  form.appendChild(input);

  input = document.createElement('input');
  input.value = game.platform;
  input.type = 'hidden'
  input.name = 'platform'
  form.appendChild(input);

  input = document.createElement('input');
  input.value = game.added;
  input.type = 'hidden'
  input.name = 'added'
  form.appendChild(input);

  input = document.createElement('input');
  input.value = game.genre;
  input.type = 'hidden'
  input.name = 'genre'
  form.appendChild(input);

  input = document.createElement('input');
  input.value = game.details;
  input.type = 'hidden'
  input.name = 'details'
  form.appendChild(input);

  input = document.createElement('input');
  input.value = game.released;
  input.type = 'hidden'
  input.name = 'released'
  form.appendChild(input);

  input = document.createElement('input');
  input.type = 'submit';
  input.value = (action == 'delete') ? 'Delete game' : 'Update game';
  form.appendChild(input)
  newCell.appendChild(form);
  return newCell;

}