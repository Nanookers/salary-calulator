$(document).ready(onReady);

function onReady() {
    console.log(`hi`);
    $(`#enterButton`).on(`click`, enterInputInformation);
    $(`body`).on(`click`, `.firedButton`, tookYerJob )
}

let listOfEmployees = [];

// global salary sum, set one up for monthly sum
let salarySum = 0;


let monthlySalary = 0;


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
        salary: Number(salaryNumber),
        monthlySalary: Number(salaryNumber/12) //created second variable for monthly
    }
    listOfEmployees.push(employeeObject);

    // pulling directly from the object is easier than targetting it later on.
   
    if (salarySum === 0) {
        salarySum = employeeObject.salary
    } else{
        salarySum+=employeeObject.salary
    }

    if (monthlySalary === 0) { //second if to add to 
        monthlySalary = employeeObject.monthlySalary
    } else{
        monthlySalary+=employeeObject.monthlySalary
    }
    
    renderEmployeeList();
}//takes data from the inputs, converts to object, and establishes value of salarySum



function renderEmployeeList() {
    $('#employeeList').empty();
    $('#totalSalary').empty();

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
    }

    // append the value of salary sum during append for simplicity. Turn salarySum/12 into a variable of a function.
    $(`#totalSalary`).append(`<p>Total Monthly: ${Math.floor(monthlySalary)}</p>`); 
    salaryTurnRed();

    //clear and reestablish the inputs at the end of the render function.
    $(`#firstNameInput`).val('')
    $(`#lastNameInput`).val('')
    $(`#idNumberInput`).val('')
    $(`#jobTitleInput`).val('')
    $(`#salaryInput`).val('')
} // renders inputs, appends new value of salary total, and cleans out inputs

function salaryTurnRed() {
    // again, turn salarySum/12 into a variable of a function for clean look
    if( Math.floor(monthlySalary) > 20000){//simplify this
        $(`#totalSalary`).css(`background-color`, `red` );
    }
} //Turns the background red.

function tookYerJob() { 
    console.log(`Bye`);
    $(this).parent().parent().remove();
} //deletes individual items in the table.









