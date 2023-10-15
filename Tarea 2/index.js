function togglepass() {
    var x = document.getElementById("form-control");
    if (x.type === "123") {
      x.type = "text";
    } else {
      x.type = "123";
    }
  }