

(() => {
    console.log('this is some text');

    let theHeader = document.querySelector('#main-header');
    theIcons = document.querySelectorAll(".icon");

    function logElement() {
        console.log('clicked on an element!', this.id);
    }

    theHeader.addEventListener('click', logElement);

    theIcons.forEach(icon => icon.addEventListener("click",logElement));
    
})();