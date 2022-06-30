import { Register } from "./class/register.js";
import { Login } from "./class/login.js";
import { EasyHTTP } from "./class/EasyHTTP-class.js";
import { Alert } from "./class/alert.js";
import { Personal } from "./class/personal.js";
import { DisplayData } from "./class/display-personal.js";

const http = new EasyHTTP();
const root = document.getElementById("root");
const register = new Register("ajarek@poczta.onet.pl", "hasło");
const login = new Login("ajarek@poczta.onet.pl", "hasło");


function renderInputs() {
  root.append(register.render(), login.render());
  const formRegister = document.querySelector("#register");
  formRegister.addEventListener("submit", registerUser);
  const formLogin = document.querySelector("#login");
  formLogin.addEventListener("submit", loginUser);
}

function registerUser(e) {
  e.preventDefault();
  try {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    
    const data = {
      email: email,
      password:password,
    };
    http.post(
      "https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/users.json",
      data
    );
    const alert = new Alert(
      "Successful registration!",
      "green",
      "#alert-container"
    );
    alert.showAlert();
  } catch (error) {
    const alert = new Alert(
      "Error: " + error.message,
      "red",
      "#alert-container"
    );

    alert.showAlert();
  }
  clearInputs("email");
  clearInputs("password");
}

function loginUser(e) {
  e.preventDefault();
  try {
    const email = document.querySelector('input[name="email1"]').value;
    const password = document.querySelector('input[name="password1"]').value;

    http
      .get(
        "https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/users.json"
      )
      .then((data) => {
        const arrOfObj1 = Object.values(data);
        const id=Object.keys(data);
        const user = arrOfObj1.find((obj) => obj.email === email);
        const index = arrOfObj1.indexOf(user);
        const idUser = id[index];

        if (user.password === password) {
          const alert = new Alert(
            "Successful login " +user.email.split("@")[0],
            "green",
            "#alert-container"
          );
          alert.showAlert();
          document.querySelector("#root").innerHTML = "";
          
          const personal = new Personal(idUser);
          document.querySelector("#root").append(personal.renderBoard(user.email.split("@")[0]),personal.render());
          completeDataEvent()
          displayPersonalInfoEvent()
        } else {
          const alert = new Alert(
            "Error: wrong password",
            "red",
            "#alert-container"
          );
          alert.showAlert();
        }
      });
  } catch (error) {
    const alert = new Alert(
      "Error: " + error.message,
      "red",
      "#alert-container"
    );

    alert.showAlert();
  }

  clearInputs("email1");
  clearInputs("password1");
}

function completeData(e) {
  e.preventDefault();
  try {
    const hiddenId = document.querySelector('input[name="id"]').value;
    const photo = document.querySelector('input[name="photo"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    
    const data = {
      photo: photo,
      phone:phone,
    };
    console.log(data);
    http.patch(
      `https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/users/${hiddenId}.json`,
      data
    );
    const alert = new Alert(
      "Successful registration!",
      "green",
      "#alert-container"
    );
    alert.showAlert();
  } catch (error) {
    const alert = new Alert(
      "Error: " + error.message,
      "red",
      "#alert-container"
    )
    alert.showAlert();
  }
  clearInputs("photo");
  clearInputs("phone");
}

function completeDataEvent() {
  document.querySelector(".form-personal").addEventListener("submit", completeData);
}

function displayPersonalInfo(e) {
  e.preventDefault();
  document.querySelector("#root").innerHTML = "";
  const dataId=e.target.dataset.id;
 
  try {
    http
    .get(
      `https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/users/${dataId}.json`
    )
    .then((data) => {
      const displayData = new DisplayData(data.photo,data.phone,data.email,data.password);
  document.querySelector("#root").append(displayData.render());
     
      
    })
  } catch (error) {
    const alert = new Alert(
      "Error: " + error.message,
      "red",
      "#alert-container"
    )
    alert.showAlert();
  }
  
  
}

function displayPersonalInfoEvent(){
  document.querySelector("#board-button").addEventListener("click",displayPersonalInfo)
    
}
function clearInputs(nameInputs) {
  document.querySelector(`input[name="${nameInputs}"]`).value = "";
}

renderInputs();
//https://randomuser.me/api/portraits/men/1.jpg