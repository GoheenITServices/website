const form = document.getElementById("contact-form");
form.addEventListener('submit', event => {
  event.preventDefault();
  
  var nameValue = document.getElementById("name").value;
  var emailValue = document.getElementById("email").value;
  var companyValue = document.getElementById("company").value;
  var messageValue = document.getElementById("message").value;
  
  var errcount = 0;
  try {
    $crisp.push(["set", "user:nickname", [nameValue]]);
    $("#name").removeClass("form-error");
    console.log("Name Good");
  }
  catch(err) {
    $("#name").addClass("form-error");
    errcount++;
    console.log("Name Bad");
  }
  try {
    $crisp.push(["set", "user:email", [emailValue]]);
    $("#email").removeClass("form-error");
    console.log("Email Good");
  }
  catch(err) {
    $("#email").addClass("form-error");
    errcount++;
    console.log("Email Bad");
  }
  try {
    $crisp.push(["set", "user:company", [companyValue]]);
    $("#company").removeClass("form-error");
    console.log("Company Good");
  }
  catch(err) {
    $("#company").addClass("form-error");
    errcount++;
    console.log("Company Bad");
  }
  
  if(errcount == 0){
    try {
      $crisp.push(["do", "message:send", ["text", messageValue]]);
      $crisp.push(["do", "chat:open"]);
      $("#message").removeClass("form-error");
      console.log("Message Good");
    }
    catch(err) {
      $("#message").addClass("form-error");
      console.log("Message Bad");
    }
  }
  console.log("Errors: ", errcount);
});

