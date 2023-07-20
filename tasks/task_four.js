function removecolor() {
    let move = document.getElementById('colorSelect'); //i targetted the html id ;colorSelect and assigned it to the variable move
    move.remove(move.selectedIndex); //using the remove method then called the variable inside the remove parenthesis and assiging a select property called selectedIndex which aids to remove the selected item on click
    move.style.color = 'red' //  //added a bit styling by coloring the text of the selected item
}



 