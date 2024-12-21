function getValue() {
    var giveName = document.getElementById('name').value;
    var givenEmail = document.getElementById('email').value;
    var age = getAge()
    var gender = getGender()
    var languages = getLanguage()
    var notes = getNotes()

    document.getElementById('modalName').innerHTML = giveName;
    document.getElementById('modalEmail').innerHTML = givenEmail;
    document.getElementById('modalAge').innerHTML = String(age);
    document.getElementById('modalGender').innerHTML = String(gender);
    document.getElementById('modalLanguages').innerHTML = String(languages);
    // document.getElementById('modalNotes').innerHTML = notes;

    // alert('This is a test function.')
    alert(`Name: ${giveName}\nEmail: ${givenEmail}\nGender: ${gender} \nAge: ${String(age)} \nLanguages: ${String(languages)} \nNotes: ${String(notes)}`);
}

function getAge(){
    const today = new Date(); // Current date
    const birthDate = new Date( document.getElementById('age').value); // User's birthdate

    let age = today.getFullYear() - birthDate.getFullYear(); // Year difference
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Adjust for cases where the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age;
}

getGender = function ()
{
    var gender = 'none'
    if(document.getElementById('female').checked) {
        gender = document.getElementById('female').value
    }
    else if(document.getElementById('other').checked) {
        gender = document.getElementById('other').value
    }
    else if(document.getElementById('male').checked) {
        gender = document.getElementById('male').value
    }
    return gender
}

function getLanguage() {
    const checkboxes = document.querySelectorAll('#form-control input[type="checkbox"]');
    const selectedValues = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedValues.push(checkbox.value);
        }
    });
    return selectedValues.join(", ");
}

function getNotes() {
    var givenNotes = document.getElementById('comments').value
    if (givenNotes === '')
        givenNotes = 'No notes provided.'
    return givenNotes
}

function show(event){
    event.preventDefault();
    getValue();

    const wrapper = document.querySelector('.output');
    const overlay = document.querySelector('.overlay');
    wrapper.style.display = 'block';
    overlay.style.display = 'block';
}

function test(){
    alert('This is a test function.')
}