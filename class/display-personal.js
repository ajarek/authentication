export class DisplayData{
    constructor(photo,email,password,phone){
        this.photo=photo;
        this.email=email;
        this.password=password;
        this.phone=phone;
    }
    render(){
const container=document.createElement("div");
container.setAttribute("class","container");
container.innerHTML=`
<div class="card" style="width: 18rem;">
  <img src="${this.photo}" class="card-img-top" alt="...">
  
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${this.email}</li>
    <li class="list-group-item">${this.password}</li>
    <li class="list-group-item">${this.phone}</li>
  </ul>
  </div>
</div>`
    
    return container;
}
}