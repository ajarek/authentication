export class Personal{
    constructor(id){
        this.id=id;
       
    }
   render(){
    const formPersonal= document.createElement("form");
    formPersonal.setAttribute("class","form-personal  border border-2 rounded rounded-3");
    formPersonal.style.width="25rem";
    const hiddenId=document.createElement("input");
    hiddenId.setAttribute("type","hidden");
    hiddenId.setAttribute("name","id");
    hiddenId.setAttribute("value",this.id);
    const photoInput = document.createElement("input");
    photoInput.type = "text";
    photoInput.name = "photo";
    photoInput.placeholder = "Photo";
    photoInput.setAttribute("class","form-control my-3");
    const phoneInput = document.createElement("input");
    phoneInput.type = "phone";
    phoneInput.name = "phone";
    phoneInput.placeholder = "Phone";
    phoneInput.setAttribute("class","form-control my-3");
    const submit = document.createElement("button");
    submit.innerText = "Submit";
    submit.setAttribute("class","btn btn-success mb-3");
    formPersonal.append(hiddenId,photoInput,phoneInput,submit);
    return formPersonal;
}
}