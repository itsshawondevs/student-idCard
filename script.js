let inputName = document.querySelector('#student_name')
let moNumber = document.querySelector('#number')
let email = document.querySelector('#email')
let inputProgram = document.querySelector('#program')
let startDate = document.querySelector('.start_date')
let imgFile = document.querySelector('#file')
let createBtn = document.querySelector('#create_btn')
let selection = document.querySelector('#selection')

let nameErr = document.querySelector('.name_err')
let mobileNoErr = document.querySelector('.mobile_no_err')
let emailErr = document.querySelector('.email_err')
let programErr = document.querySelector('.program_err')
let bloodErr = document.querySelector('.blood_err')
let dateErr = document.querySelector('.date_err')
let imgErr = document.querySelector('.img_err')

let studentInfo = document.querySelector('#student_info')
let studentId = document.querySelector('#student_id')

let cardHeading = document.querySelector('.student_card_heading')
let image = document.querySelector('#image')
let studentName = document.querySelector('.name')
let programName = document.querySelector('.program_name')
let idNumber = document.querySelector('#id_number')
let mobileNumber = document.querySelector('#mobile_no')
let date = document.querySelector('#date_time')
let bloodName = document.querySelector('#blood_name')

let mobileRegex = '^(?:\\+88|88)?(01[3-9]\\d{8})$'
let emailRegex = '/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'

const count = 5
const numbers = '0123456789'

const mergeId = count + numbers

function random() {
    let mainId = ''

    mainId += numbers[Math.floor(Math.random() * numbers.length)]

    while(count > mainId.length){
        mainId += mergeId[Math.floor(Math.random() * mergeId.length)]
    }

    idNumber.innerHTML = mainId
}



createBtn.addEventListener('click',function(){
    if(isNaN(inputName.value)){
        nameErr.innerHTML = ''
        studentName.innerHTML = inputName.value
    }else{
        nameErr.innerHTML = '*please enter name here'
        studentInfo.style.display = 'block'
    }

    if(moNumber.value.match(mobileRegex)){
        mobileNoErr.innerHTML = ''
        mobileNumber.innerHTML = moNumber.value
    }else{
        mobileNoErr.innerHTML = '*please enter mobile number'
        studentInfo.style.display = 'block'
    }

    if(email.value.match(emailRegex)){
        emailErr.innerHTML = ''
    }else{
        emailErr.innerHTML = '*please enter email'
    }

    if(inputProgram.options.selectedIndex == 0){
        programErr.innerHTML = '*plase select program'
    }else{
        programErr.innerHTML = ''
        programName.innerHTML = inputProgram.value
    }
    
    if(selection.options.selectedIndex == 0){
        bloodErr.innerHTML = '*plase select blood group'
    }else{
        bloodErr.innerHTML = ''
        bloodName.innerHTML = selection.value
    }

    if(startDate.value == ''){
        dateErr.innerHTML = '*please enter starting date'
    }else{
        dateErr.innerHTML = ''
        date.innerHTML = startDate.value
    }
    
    if(imgFile.value == ''){
        imgErr.innerHTML = '*please select image'
    }else{
        imgErr.innerHTML = ''
        imgFile = image.src = URL.createObjectURL(imgFile.files[0])
    }
        
    random()

    // studentInfo.style.display = 'none'
    // studentId.style.display = 'block'


})



// studentName.innerHTML = inputName.value
//     programName.innerHTML = inputProgram.value
//     mobileNumber.innerHTML = moNumber.value
//     idNumber.innerHTML = inputId.value
//     bloodName.innerHTML = selection.value
//     date.innerHTML = startDate.value
//     imgFile = image.src = URL.createObjectURL(imgFile.files[0])



