
//Date selection script

var table = document.querySelector('#calendar')

var selectedCell = document.querySelectorAll('#calendar td');
selectedCell.forEach(e => e.addEventListener("click", function () {


    selectedCell.forEach(className => {
        className.classList.remove('selected');
    });

    this.classList.add('selected');

}));
