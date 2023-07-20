
function getFormvalue(){
    let fname = document.forms['form1']['fname']; //using the document.forms, i targed the id:form1 plus the name attribute and stored it in  a variable 'fname
    let lname = document.forms['form1']['lname']; //also did the same for line 4 using the steps in line 3 but stored it in a variable called lname
    solution = `${fname.value}  ${lname.value}`    // interpolated the values of variable fname and lname and stored it in a new variable called solution
    console.log(solution);  //logged solution to the browser console to display the value: David Beckham
    // return solution
}

