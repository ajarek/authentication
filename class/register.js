export class Register {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  render() {
    const form = document.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("method", "");
    form.setAttribute("class", "register-form");
    form.id = "register";
    form.setAttribute("class", "col-lg-4 border border-2 rounded rounded-3 ");
    const logo = document.createElement("img");
    logo.setAttribute("src", "./images/favicon.ico");
    logo.setAttribute("alt", "logo");
    logo.setAttribute("class", "logo mt-3");
    const title = document.createElement("h4");
    title.setAttribute("class", "title");
    title.innerHTML = "Join thousands of learners from around the world.";
    const description = document.createElement("p");
    description.setAttribute("class", "description");
    description.innerHTML =
      "Create websites by creating real projects. There are many paths to choose from.";
    const email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("name", "email");
    email.setAttribute("placeholder", "Email");
    email.setAttribute("class", "form-control mb-3");
    email.setAttribute("required", "");
    const password = document.createElement("input");
    password.setAttribute("type", "password");
    password.setAttribute("name", "password");
    password.setAttribute("placeholder", "Password");
    password.setAttribute("class", "form-control mb-3");
    password.setAttribute("required", "");
    const submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Start coding now");
    submit.setAttribute("class", "btn btn-primary mb-3");
    form.append(logo, title, description, email, password, submit);
    return form;
  }
}
