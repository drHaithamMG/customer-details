// Prevent user from entering white spaces on first/last name field
document.querySelectorAll('.checkEneteredChar').forEach(item => {
        item.addEventListener('keypress', function(event) {
            let key = event.keyCode;
            if (key === 32) {
                event.preventDefault();
            }
        })
    })
    //Prevent user from entering numbers 
const alphaOnly = document.querySelector('.city')

alphaOnly.addEventListener('keypress', event => {
        let key = event.keyCode;
        if (key >= 48 && key <= 57) {
            event.preventDefault();
        }
    })
    //force the user to enter only-digit inputs
document.querySelectorAll('.number').forEach(item => {
    item.addEventListener('keypress', event => {
        let key = event.keyCode;
        if (key < 48 || key > 57) {
            event.preventDefault();
        }
    })
})

/**
 * Email check vailidity
 * @param {string} email 
 * @returns {boolean} 
 */
function checkEmail(email) {
    //https://www.w3resource.com/javascript/form/email-validation.php
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

}
/**
 * show 'other' section if it selected from the drop down menu
 * @param {void}
 * @return {void}
 */
function checkOther() {
    const other = document.querySelector('.hidden');
    const option = document.getElementById('select1');
    let value = option.value;
    if (value == '4') {
        option[5].text = "Other (Please specify...)"
        other.style.display = 'block';
    } else {
        option[5].text = "Other"
        other.style.display = 'none';
    }


}