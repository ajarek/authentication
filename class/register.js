export class Register{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    
   render(){
    
    const form = document.createElement('form');
    form.setAttribute('action','/register');
    form.setAttribute('method','post');
    form.setAttribute('class','form-horizontal');
    form.setAttribute('role','form');
    form.setAttribute('id','register');
    form.setAttribute('class','col-lg-4 border border-2 rounded rounded-3 ');
    const logo = document.createElement('img');
    logo.setAttribute('src','./images/favicon.ico');
    logo.setAttribute('alt','logo');
    logo.setAttribute('class','logo mt-3');
    const title = document.createElement('h3');
    title.setAttribute('class','title');
    title.innerHTML = 'Join thousands of learners from around the world.';
    const description = document.createElement('p');
    description.setAttribute('class','description');
    description.innerHTML = 'Create websites by creating real projects. There are many paths to choose from.';
    const email = document.createElement('input');
    email.setAttribute('type','email');
    email.setAttribute('name','email');
    email.setAttribute('placeholder','Email');
    email.setAttribute('class','form-control mb-3');
    email.setAttribute('name','email');
    email.setAttribute('id','email');
    const password = document.createElement('input');
    password.setAttribute('type','password');
    password.setAttribute('name','password');
    password.setAttribute('placeholder','Password');
    password.setAttribute('class','form-control mb-3');

    const submit = document.createElement('input');
    submit.setAttribute('type','submit');
    submit.setAttribute('value','Start coding now');
    submit.setAttribute('class','btn btn-primary mb-3');
    submit.setAttribute('id','submit');
    form.append( logo,title,description,email,password,submit);
    return form;
    
}
}