let day  =  document.getElementById('daysOutput');
let month = document.getElementById('monthsOutput');
let year = document.getElementById('yearsOutput');



function handleClick() {
    let date = new Date();
    
    let days = document.forms['myForm']['days'].value;
    let months = document.forms['myForm']['months'].value;
    let years = document.forms['myForm']['years'].value;

    let flag = validateForm(date,days,months,years);
    if(!flag) {
        return;
    }
    let presentDay = date.getDate();
    let presentMonth = date.getMonth() +1;
    let presentYear = date.getFullYear();
    
    let yearsAge = presentYear - parseInt(years);
    let monthAge;
    let dayAge;
    if(presentMonth > parseInt(months)) {
        monthAge = presentMonth - parseInt(months);
    }else {
        monthAge = 12 + presentMonth - parseInt(months);
        --yearsAge;
    }
    if(presentDay > parseInt(days)) {
        dayAge = presentDay - parseInt(days);
    }else {
        dayAge = 31 + presentDay - parseInt(days);
        --monthAge;
    }

    
    day.innerHTML = dayAge;
    month.innerHTML = monthAge;
    year.innerHTML = yearsAge;


}

function validateForm(date,days,months,years) {
    
    

    if(days < 1 || day > 31) {
        alert('Enter day between 1-31');
        return false;
    }
    if(months < 1 || months > 12) {
        alert('Enter month between 1-12');
        return false;
    }
    else { 
        if(months == '1' || '3' || '5' || '7' || '8' || '10' || '12') {
            if(days >= 31) {
                alert(`There are 30 days in ${months}'s month`);
                return false;
            }
        }
    }
    
    if(years > date.getFullYear()) {
        alert('Year cannot be in the future');
        return false;
    }
    
    return true;
   
}