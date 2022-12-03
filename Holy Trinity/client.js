$(document).ready(onReady);

function onReady() {
    console.log(`hi`);
    $(`#enterButton`).on(`click`, enterInputInformation);
    $(`body`).on(`click`, `.firedButton`, tookYerJob )
}

let listOfEmployees = [];

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
    renderEmployeeList();
}

let salarySum = 0;

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
        salarySum += listOfEmployees[i].salary //adding every single salary in the array on click
        
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









