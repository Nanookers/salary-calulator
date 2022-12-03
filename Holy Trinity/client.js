$(document).ready(onReady);

function onReady() {
    console.log(`hi`);
    $(`#enterButton`).on(`click`, enterInputInformation);
    $(`body`).on(`click`, `.firedButton`, tookYerJob )
}

let listOfEmployees = [];
let salarySum = 0;

function enterInputInformation() { //successfully takes unput data and pushes it into an array
    console.log(`hi`);
    let firstName = $(`#firstNameInput`).val()
    let lastName = $(`#lastNameInput`).val()
    let idNumber = $(`#idNumberInput`).val()
    let jobTitle = $(`#jobTitleInput`).val()
    let salaryNumber = $(`#salaryInput`).val()
    
    let employeeObject = {
        first: firstName,
        last: lastName,
        id: idNumber,
        title: jobTitle,
        salary: Number(salaryNumber)
    }
    listOfEmployees.push(employeeObject);
   
    if (salarySum === 0) {
        salarySum = employeeObject.salary
    } else{
        salarySum+=employeeObject.salary
    }
    
    
    // sum math moved up to make it easier to add math. 
    
    renderEmployeeList();
}



function renderEmployeeList() {
    $('#employeeList').empty();
    $('#totalSalary').empty();
    // loop through the list

    for( i = 0; i < listOfEmployees.length; i++){ 
        $('#employeeList').append(` 
            <tr>
                <td>${listOfEmployees[i].first}</td>
                <td>${listOfEmployees[i].last}</td>
                <td>${listOfEmployees[i].id}</td>
                <td>${listOfEmployees[i].title}</td>
                <td class="salaryIdentifier">${listOfEmployees[i].salary}</td> 
                <td><button class="firedButton">Bye</button</td>
            </tr>
        `);
        // console.log(listOfEmployees[i].salary);
        // salarySum = listOfEmployees[i].salary;
        // console.log(salarySum);    
    }



    $(`#totalSalary`).append(`<p>${salarySum}</p>`);
    salaryTurnRed();


}






function salaryTurnRed(params) {
    
    if( salarySum > 20000)
        $(`#totalSalary`).css(`color`, `red` );
}


function tookYerJob() { //button works
    console.log(`hi`);
    let clickedFiredButton = $(this);
    console.log(clickedFiredButton);
    let theEmployeeToFire = clickedFiredButton.parent().parent(); //ugly but solve later
    console.log(theEmployeeToFire);
    theEmployeeToFire.remove();
} //deletes individual items in the table.









