const toggleSwitch = document.querySelector('input[type="checkbox"]');

//Switch theme dynamically

function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme','dark');
    }
    else {
        document.documentElement.setAttribute('data-theme','light');
    }
}
//Event listener
toggleSwitch.addEventListener('change',switchTheme)