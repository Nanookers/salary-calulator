//////////////////////This is broken after too much tampering, left in file to show work.

$(document).ready(onReady);

function onReady() {
    console.log(`hi`);
    $(`#enterButton`).on(`click`, takeInputInformation);
    $(`body`).on(`click`, `.firedButton`, tookYerJob );      
    $(`body`).on(`click`, `.firedButton`, subtractFromTotalSum );      
}


let listOfEmployees = [];

// global salary sum 
let salarySum = 0;

//variable done to declutter Math.floor(salarySum/12) at the end.
let equationForSum = 0;

//variable to store salary, and array to store data
let getSalary = 0;
let listOfSalaries = [];


function takeInputInformation() { //successfully takes unput data and pushes it into an array
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
        salary: Number(salaryNumber), //calculate monthly salary in object
        //tried to use a getter function to isolate the salary data
        get salaryData(){
            getSalary = $(this.salary);
            return listOfSalaries.push(getSalary);
        }
    }
    //seeing if I can isolate the function
    console.log(employeeObject.salaryData);

    listOfEmployees.push(employeeObject);

    if (salarySum === 0) {
        salarySum = employeeObject.salary
    } else{
        salarySum+=employeeObject.salary
    } //putting this in its own  function breaks everything. 
      
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
    equatesSalary();

    $(`#totalSalary`).append(`<p>Total Monthly Salary: ${equationForSum}</p>`); 
    
    salaryTurnRed();

    //clear and reestablish the inputs at the end of the render function.
    $(`#firstNameInput`).val('')
    $(`#lastNameInput`).val('')
    $(`#idNumberInput`).val('')
    $(`#jobTitleInput`).val('')
    $(`#salaryInput`).val('')
} // renders inputs, appends new value of salary total, and cleans out inputs

function salaryTurnRed() {
    if( equationForSum > 20000){
        $(`#totalSalary`).css(`background-color`, `red` );
    }
} //Turns the background red.

function tookYerJob() { 
    console.log(`Bye`);
    let clickedFiredButton = $(this);
    let theEmployeeToFire = clickedFiredButton.parent().parent(); //ugly, make prettier?
    theEmployeeToFire.remove(); 

} //deletes individual items in the table.

function subtractFromTotalSum(){

    //.remove is not a function that
    // let clickedFiredButton = $(this);
    // let theEmployeeToFire = clickedFiredButton.parent().parent();
    // let salaryText = theEmployeeToFire.text()
    // salaryText.remove();
    
    //not data to push into an array
    // arrayOfPeopleFired.push(theEmployeeToFire)
    // console.log(arrayOfPeopleFired);
    
    
}

function equatesSalary(){
   equationForSum += Math.floor(salarySum/12);
}

// 






