import { Register } from "./class/register.js";
import { Login } from "./class/login.js";
import { EasyHTTP } from "./class/EasyHTTP-class.js";
import { Alert } from "./class/alert.js";

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
      password: hashed,
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
        const user = arrOfObj1.find((obj) => obj.email === email);
        if (user.password === password) {
          const alert = new Alert(
            "Successful login!",
            "green",
            "#alert-container"
          );
          alert.showAlert();
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

function clearInputs(nameInputs) {
  document.querySelector(`input[name="${nameInputs}"]`).value = "";
}

renderInputs();
