


function addingEventListener(){
    let input = document.getElementById('button');
    alert('I was clicked!');

    input.addEventListener('click', addingEventListener);
}
