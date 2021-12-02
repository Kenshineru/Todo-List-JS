var list = document.getElementById("myList");
function js_func() {
  var value = document.getElementById("to-do").value;
  var li = document.createElement("LI");
  var textNode = document.createTextNode(value);
  li.appendChild(textNode);
  list.appendChild(li);
}
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
