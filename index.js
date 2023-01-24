var modalButton = document.querySelector("#Modal");
var modalBox= document.querySelector("#ModalBox");
console.log(modalButton)


modalButton.addEventListener("click",() => {
    console.log("hey")
    modalBox.style.display="block"
   
  })
 

  window.addEventListener("click",(e) => {
    if (e.target == modalBox) {
        modalBox.style.display = "none";
    }

  })