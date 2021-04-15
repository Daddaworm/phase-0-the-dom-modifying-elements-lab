// Write your code here!
document.getElementById('main').remove();



const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = '<h1>YOUR-NAME is the champion</h1>';
document.body.appendChild(newHeader);