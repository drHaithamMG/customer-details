// Prevent user from entering white spaces on first/last name field
document.querySelectorAll('.check-entered-char').forEach(item => {
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
/*Listeners*/
document.querySelectorAll('.full-name-checker').forEach((dataInput) => {
    dataInput.addEventListener('focus',()=>{
        const mainParent=dataInput.closest('.form-section');
            mainParent.classList.remove('form-section-error');
    })
});
document.querySelectorAll('.check-address').forEach((dataInput) => {
    dataInput.addEventListener('focus',()=>{
        const mainParent=dataInput.closest('.form-section');
            mainParent.classList.remove('form-section-error');
    })
});
document.querySelectorAll('.check-phone-number').forEach((dataInput) => {
    dataInput.addEventListener('focus',()=>{
        const mainParent=dataInput.closest('.form-section');
            mainParent.classList.remove('form-section-error');
    })
});
const emailListener=document.querySelector('.email-validation');
    emailListener.addEventListener('focus',()=>{
    const mainParent=emailListener.closest('.form-section');
            mainParent.classList.remove('form-section-email-error');
})
/*end listeners*/

const personForm = document.getElementsByClassName('person-form')[0];
let isItOkayToSubmit=false;
let data={};
personForm.addEventListener('submit', (event) => {
    event.preventDefault();
    /*collecting data*/
    const selectors=['.full-name-checker','.check-address','.check-phone-number'].forEach(selector=>checkRequired(selector));
    const email=checkEmail();
    if(isItOkayToSubmit==true){
        console.log(data);
    }
    
    
});
function checkRequired(selector){
    const fullName={};
    document.querySelectorAll(selector).forEach((dataInput) => {
        if (dataInput.value == '') {
            const mainParent=dataInput.closest('.form-section');
            mainParent.classList.add('form-section-error');
            isItOkayToSubmit=false;
        }
        else{
            isItOkayToSubmit=true;
        data[dataInput.name]=dataInput.value;
        }
    });
    return fullName;
}
function checkEmail(){
    const email=document.querySelector('.email-validation');
    if(email.value==''){
        isItOkayToSubmit=true;
        data[email.name]='Not givin';
    }
    else{
        const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.value.match(mailFormat)){
            isItOkayToSubmit=true;
        data[email.name]=email.value;
        }
        else{
            const mainParent=email.closest('.form-section');
            mainParent.classList.add('form-section-email-error');
            isItOkayToSubmit=false;
        }
    }
}
