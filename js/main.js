

(() => {
    console.log('this is some text');

    let theHeader = document.querySelector('#main-header');

    function logElement() {
        console.log('clicked on an element!');
    }

    theHeader.addEventListener('click', logElement);
    
})();