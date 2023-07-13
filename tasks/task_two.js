
function getFormvalue(){
    let fname = document.forms['form1']['fname'];
    let lname = document.forms['form1']['lname'];
    solution = `${fname.value}  ${lname.value}`

    console.log(solution);
}