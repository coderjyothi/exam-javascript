const form = document.getElementById("form");
console.log(form);
const name = document.getElementById("passname")
console.log()
const email = document.getElementById("email")

const phone = document.getElementById("phone")
const oneway = document.getElementById("oneway")
const roundtrip = document.getElementById("roundtrip")

form.addEventListener("submit",(e)=>{
    //e.preventDefault()
    Validate()
})

function Validate(){
    let phoneValue = phone.value.trim()
    let nameValue = passname.value.trim()

    //name check
    if(nameValue===""){
     setError(passname,"name cannot be empty")
    }
    else if(nameValue.length<5){
     setError(passname,"name should be minimum 5 characters")
    }
    else{
        setSucess(passname)
    }

    //phone check
    if(phoneValue===text){
        setError(phone,"please enter phone number")
       }
       else if(phoneValue.length<10){
        setError(passname,"number should be minimum 10 characters")
       }
       else{
           setSucess(passname)
       }

       function setError(input,message){
        let parent = input.parentElement;
        let small = parent.querySelector("small")
        small.innerText = message
        parent.classList.add("error")
        parent.classList.remove("sucess")
       }
       function setSucess(input){
        let parent = input.parentElement;
        parent.classList.add("sucess")
        parent.classList.remove("error")
       }




}