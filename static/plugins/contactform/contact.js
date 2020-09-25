const form = document.getElementById("contact-form");
form.addEventListener('submit', event => {
  event.preventDefault();
  
  var nameValue = document.getElementById("name").value;
  var emailValue = document.getElementById("email").value;
  var phoneValue = document.getElementById("phone").value;
  var messageValue = document.getElementById("message").value;
  
  var errcount = 0;
  try {
    $crisp.push(["set", "user:nickname", [nameValue]]);
    $("#name").removeClass("form-error");
  }
  catch(err) {
    $("#name").addClass("form-error");
    errcount++;
  }
  try {
    $crisp.push(["set", "user:email", [emailValue]]);
    $("#email").removeClass("form-error");
  }
  catch(err) {
    $("#email").addClass("form-error");
    errcount++;
  }
  if(phoneValue !== ""){
    try {
      $crisp.push(["set", "user:phone", [phoneValue]]);
      $("#phone").removeClass("form-error");
    }
    catch(err) {
      $("#phone").addClass("form-error");
      errcount++;
    }
  }
  
  if(errcount == 0){
    try {
      $crisp.push(["do", "message:send", ["text", messageValue]]);
      $crisp.push(["do", "chat:open"]);
      $("#message").removeClass("form-error");
    }
    catch(err) {
      $("#message").addClass("form-error");
    }
  }
});

$(".price-item:eq(0) a.btn").click(function() {
  $crisp.push(["set", "session:segments", [["Management"]]]);
  $crisp.push(["do", "message:send", ["text", "I'd like some more information about your Device Management plans."]]);
  $crisp.push(["do", "chat:open"]);
});

$(".price-item:eq(1) a.btn").click(function() {
  $crisp.push(["set", "session:segments", [["Lease"]]]);
  $crisp.push(["do", "message:send", ["text", "I'd like some more information about your Equipment Leasing Plans."]]);
  $crisp.push(["do", "chat:open"]);
});

$(".price-item:eq(2) a.btn").click(function() {
  $crisp.push(["set", "session:segments", [["White-Glove"]]]);
  $crisp.push(["do", "message:send", ["text", "I'd like some more information about your White Glove Service."]]);
  $crisp.push(["do", "chat:open"]);
});
