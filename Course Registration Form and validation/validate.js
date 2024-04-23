function validation()
{
    //name
    var a=document.form.name.value;
    if(a=="")
    {
        alert("please enter the name");
        document.form.name.focus();
        return false;
    }
    if(!isNaN(a))
    {
        alert("please enter only the characters");
        document.form.name.select();
        return false;
    }
    if((a.length < 5)||(a.length > 15))
    {
        alert("User name should be 5 to 15 character long.");
        document.form.name.select();
        return false;
    }
    
    //email
    var email=document.getElementById("mail").value;
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf("."); 
    if(email=="")
    {
        alert("Please enter a email!");
        return false;
    } 
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
    {  
        alert("Please enter a valid e-mail address");  
        return false;  
    }
    // let email=$('input[name=mail]').val();
    // if(email=='' || email.indexOf('@')==-1 || email.indexOf('.')==-1)
    // {
    //     alert("Enter a valid email address");
    //     return false;
    // }
    // else
    // {
    //     alert("Correct email address");
    // }
    
    //course interest
    var result = document.getElementById('interest').value;
    if (result == 0) 
    {
        alert("Please Select the course!!");
        return false;
    }
     // Phone number Validation
     var phno=document.getElementById("pno").value;
     var phoneno1 = /^\d{10}$/;
     var phoneno2= /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if(phno=="")
    {
        alert("Please enter phone number!");
        return false;
    }
     if(!phno.match(phoneno1)){
         alert("Phone number is not valid");
         return false;
     }
     //branch--checkbox
    var dept = document.getElementById("dept");
    if (dept.value == "") 
    {
        alert("Please select your branch!");
        return false;
    }
    //gender
    let Gender = document.form.gen;
    var status=0;
    for(let i=0;i<Gender.length;i++)
    {
        if(Gender[i].checked==true)
        {
            status=1;
            break;
        }
    }
    if(status==0)
    {
        alert("Select the gender");
        return false;
    }
    //selecting course
    let cor = document.form.course;
    var status=0;
    for(let i=0;i<cor.length;i++)
    {
        if(cor[i].checked==true)
        {
            status=1;
            break;
        }
    }
    if(status==0)
    {
        alert("Select atleast one course!");
        return false;
    }
    
    //address
    var address = document.getElementById("street");
        if (address.value == "") {
            alert("Please type your address!");
            return false;
    }
    //selecting state
    var State = document.getElementById("state").value;
    if (State == "") 
    {
        alert("Please select your state!");
        return false;
    }

    //password

    var password1=document.getElementById("pass").value;
    document.getElementById("message").innerHTML =" ";
    if(password1=="")
    {
        document.getElementById("message").innerHTML="**Fill the password please!";
        return false;
    }
    if(password1.length < 8) {  
        document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
        return false;  
    }  
    if(password1.length > 15) {  
        document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
        return false;  
    } 
    
    // confirm password
    var password=document.form.pass.value;
    var confirmpassword=document.form.cpass.value;
    if(confirmpassword=="")
    {
        alert("please verify your password");
        return false;
    }
    if(password!=confirmpassword)
    {
        alert("Passwords do not match");
        return false;
    }
    return true;
}

    


// var password=document.getElementById("pass").value;
//     if(password=="")
//     {
//         document.getElementById("message").innerHTML="**Fill the password please!";
//         return false;
//     }
//     if(password.length < 8) {  
//         document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
//         return false;  
//     }  
//     if(password.length > 15) {  
//         document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
//         return false;  
//     } 
