$(document).ready(onReady);

function onReady() {
    console.log(`hi`);
    $(`#enterButton`).on(`click`, enterInputInformation);
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
        title: Number(jobTitle),
        salary: salaryNumber
    }
    listOfEmployees.push(employeeObject);
    renderEmployeeList();
}

function renderEmployeeList() {
    $('#employeeList').empty();
    $('#totalSalary').empty();
    // loop through the list

    for( i = 0; i < listOfEmployees.length; i++){ //this appends, but not with a class on the tr or td
        $('#employeeList').append(` 
            <tr>
                <td>${listOfEmployees[i].first}</td>
                <td>${listOfEmployees[i].last}</td>
                <td>${listOfEmployees[i].id}</td>
                <td>${listOfEmployees[i].title}</td>
                <td>${listOfEmployees[i].salary}</td>
                <td><button class="firedButton">Bye</button</td>
            </tr>
        `);
        salaryAdderToDom();
    }
}// appends everything



// create a functino that takes the imput of listOfEmployees[i].salary
function salaryAdderToDom() {
    $(`#totalSalary`).append(`
        <p>${listOfEmployees[i].salary}</p>
    `)
    
}//posts the 


// salarySum = listOfEmployees.salary;
// console.log(salarySum);



