const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Example of creating a new list item and delete button:
const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';

// Add accessible label for screen readers
deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

// Append the delete button to the list item
li.append(deleteButton);

// Append the list item to the unordered list
list.append(li);
