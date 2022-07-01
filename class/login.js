export class Login {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  render() {
    const form = document.createElement("form");
    const logo = document.createElement("img");
    form.setAttribute("action", "");
    form.setAttribute("method", "");
    form.setAttribute("class", "login-form");
    form.id = "login";
    form.setAttribute("role", "form");
    form.setAttribute("id", "login");
    logo.setAttribute("src", "./images/favicon.ico");
    logo.setAttribute("alt", "logo");
    logo.setAttribute("class", "logo mt-3");
    form.setAttribute("class", "col-lg-4 border border-2 rounded rounded-3");
    const email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("name", "email1");
    email.setAttribute("placeholder", "Email");
    email.setAttribute("class", "form-control my-3");
    email.setAttribute("id", "email-login");
    email.setAttribute("required", "");
    const password = document.createElement("input");
    password.setAttribute("type", "password");
    password.setAttribute("name", "password1");
    password.setAttribute("placeholder", "Password");
    password.setAttribute("class", "form-control mb-3");
    password.setAttribute("required", "");
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Login");
    submit.setAttribute("class", "btn btn-primary");
    submit.setAttribute("id", "submit-login");
    const textSocial = document.createElement("p");
    textSocial.setAttribute("class", "text-social");
    textSocial.innerHTML = "Or continue with these social profiles";
    const facebook = document.createElement("a");
    facebook.setAttribute("href", "#");
    facebook.setAttribute("class", "facebook me-2");
    facebook.innerHTML = `<img src="./images/Facebook.svg" alt="facebook">`;
    const twitter = document.createElement("a");
    twitter.setAttribute("href", "#");
    twitter.setAttribute("class", "twitter me-2");
    twitter.innerHTML = `<img src="./images/Twitter.svg" alt="twitter">`;
    const google = document.createElement("a");
    google.setAttribute("href", "#");
    google.setAttribute("class", "google me-2");
    google.innerHTML = `<img src="./images/Google.svg" alt="google">`;
    const github = document.createElement("a");
    github.setAttribute("href", "#");
    github.setAttribute("class", "github");
    github.innerHTML = `<img src="./images/Github.svg" alt="github">`;
    const infoRegister = document.createElement("p");
    infoRegister.setAttribute("class", "info-register");
    infoRegister.innerHTML = `Don\'t have an account? <a href="/register">Register</a>`;
    form.append(
      logo,
      email,
      password,
      submit,
      textSocial,
      facebook,
      twitter,
      google,
      github,
      infoRegister
    );
    return form;
  }
}
