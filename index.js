var Button = document.querySelector(".submitBtn");
var Name = document.querySelector(".form-input-name");
var Email = document.querySelector(".form-input-email")
Button.disabled = true;

Button.addEventListener("click", () => {
  console.log("hey");
});

// Name.addEventListener("input", (e) => {


//   if (e.target.value.length < 1  ) {
//   console.log("enter value");
//   Button.disabled = true;
  
//   } else {
//     console.log(e.target.value.length);
//     Button.disabled = false;

//   }
// });


Name.addEventListener("keyup",see)
Email.addEventListener("keyup",see)



function see(e) {
  if (e.target.value.length < 10 ) {
    console.log(e.target.value)
    console.log("enter value");
    Button.disabled = true;
    
    } else {
      console.log(e.target.value);
      Button.disabled = false;
  
    }
}