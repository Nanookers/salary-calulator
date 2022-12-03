$(document).ready(onReady);

function onReady() {
    console.log(`hi`);
    $(`#enterButton`).on(`click`, enterInputInformation);
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
        salary: salaryNumber
    }
    listOfEmployees.push(employeeObject);
    renderEmployeeList();
}

function renderEmployeeList() {
    $('#employeeList').empty();
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
    }
}

//class="anotherEmployee"
//class="fromFirstName"

/* <td>${listOfEmployees[i].last}</td>
<td>${listOfEmployees[i].id}</td>
<td>${listOfEmployees[i].title}</td>
<td>${listOfEmployees[i].salary}</td> */