function contactus(){
  var emailValue = document.getElementById("email").value;
  var nameValue = document.getElementById("name").value;
  var companyValue = document.getElementById("company").value;
  var messageValue = document.getElementById("message").value;
  
  $crisp.push(["set", "user:email", [emailValue]]);
  $crisp.push(["set", "user:nickname", [nameValue]]);
  $crisp.push(["set", "user:company", [companyValue]]);
  $crisp.push(["do", "message:send", ["text", messageValue]]);
  $crisp.push(["do", "chat:open"]);
  
  return false;
}
document.getElementById("contact-form").onSubmit = contactus;
