function addingEventListener() {
    const input  = document.getElementById('button');
    input.addEventListener('click', () => {
        console.log('I was clicked');
    })
}

addingEventListener();
