var Button = document.querySelector(".submitBtn");
var Name = document.querySelector(".form-input-name");
Button.disabled = true;

Button.addEventListener("click", () => {
  console.log("hey");
});

Name.addEventListener("input", (e) => {


  if (e.target.value.length < 1  ) {
  console.log("enter value");
  Button.disabled = true;
  
  } else {
    console.log(e.target.value.length);
    Button.disabled = false;

  }
});
