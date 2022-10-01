let stored_data = JSON.parse(localStorage.getItem("login-data")) || [];

let check_data = document.querySelector("#data");

check_data.addEventListener("submit", check);

function check(event) {
    event.preventDefault();
    //    console.log(stored_data);

    let mail = document.querySelector("#e-mail").value;

    let pass = document.querySelector("#e-pass").value;


    if(mail == stored_data.mail && pass == stored_data.pass && pass == stored_data.con_pass ){
     alert("Login Successful");
     window.location.href="index.html";
    }else{
     alert("Wrong");
    }
}


// console.log(stored_data.name);

// console.log(stored_data.number);


// console.log(stored_data.user_name);
