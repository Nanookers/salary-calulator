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

// function deleteForecast() {
//   let buttonThatGotClicked = $(this);
//   let theListItemToDelete = buttonThatGotClicked.parent();
//   theListItemToDelete.remove();
// }

function tookYerJob(params) {
    console.log(`hi`);
}




//Something broke the function in this.
// function salaryAdderToDom() {

//     // each time through the loop, add the next salary.
//     // create a varaible to add ${listOfEmployees[i].salary} to
//     // variable changes instead of adding another row (figure that out later)
//     for( i = 0; i < listOfEmployees.length; i++ ){

//         let instantSalary = 0;
//         if( salarySum < 0 ){
//             salarySum += instantSalary
//         }else{
//             salarySum  = instantSalary + listOfEmployees[i].salary;
//         }
        
//         console.log(salarySum);

//         $('#totalSalary').empty();

//         $(`#totalSalary`).append(`
//         <p>${salarySum}</p>
//         `)  
        
       
//     }   


// }//posts the newest value, changing the DOM each time a new value is entere


// salarySum = listOfEmployees.salary;
// console.log(salarySum);


