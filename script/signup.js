let data = document.querySelector("#details");

data.addEventListener("submit", storedata);

function storedata(event) {
    event.preventDefault();

    if (data.name.value == "" || data.user_name.value == "" || data.mail.value == "" || data.pass.value == "" || data.con_pass.value == "") {
        alert("Pls fill ever form");
    } else if (data.pass.value != data.con_pass.value) {
        alert("Password mismatch")
    } else {

        let obj_data = {
            name: data.name.value,
            user_name: data.user_name.value,
            mail: data.mail.value,
            number: data.number.value,
            pass: data.pass.value,
            con_pass: data.con_pass.value
        }

        localStorage.setItem("login-data", JSON.stringify(obj_data));
      alert("Sign in successful")
    //   var url="login.html";
      window.location.href="login.html";
    }
}