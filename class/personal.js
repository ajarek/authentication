export class Personal {
  constructor(id) {
    this.id = id;
  }
  renderBoard(user) {
    const board = document.createElement("div");
    board.setAttribute("class", "board mb-4 ");
    board.innerHTML = `
        <div class="board-header">
            <button id="board-button" data-id="${this.id}" class="btn btn-primary mb-2">${user} your personal info</button class="btn btn-primary">
            <button id="close-board" class="btn btn-secondary mb-2">❌ log out</button>
        </div>`;
    return board;
  }

  render() {
    const formPersonal = document.createElement("form");
    const h4 = document.createElement("h4");
    h4.innerHTML = "Complete the data";
    formPersonal.setAttribute(
      "class",
      "form-personal  border border-2 rounded rounded-3 p-2"
    );
    formPersonal.style.width = "19rem";
    const hiddenId = document.createElement("input");
    hiddenId.setAttribute("type", "hidden");
    hiddenId.setAttribute("name", "id");
    hiddenId.setAttribute("value", this.id);
    const photoInput = document.createElement("input");
    photoInput.type = "text";
    photoInput.name = "photo";
    photoInput.placeholder = "Photo";
    photoInput.setAttribute("class", "form-control my-3");
    const phoneInput = document.createElement("input");
    phoneInput.type = "phone";
    phoneInput.name = "phone";
    phoneInput.placeholder = "Phone";
    phoneInput.setAttribute("class", "form-control my-3");
    const submit = document.createElement("button");
    submit.innerText = "Submit";
    submit.setAttribute("class", "btn btn-success mb-3");
    formPersonal.append(h4, hiddenId, photoInput, phoneInput, submit);
    return formPersonal;
  }
}
