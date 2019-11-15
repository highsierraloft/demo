var task = {
  setLabel: function(label) {this.label = label}
};

var abc = Object.create(task);
abc.createName = function (name) {
  this.setLabel(name)
};

abc.createName('Task 1');

console.log(abc.label);

var modal = document.getElementsByClassName("modal")[0];
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};  