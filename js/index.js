const toolbar = document.querySelector(".toolbar");
const imageTool = document.getElementById("image-tool");
const image = document.getElementById("image");
const title = document.querySelector(".title");
const main = document.querySelector(".main");

let draggedElm;

toolbar.addEventListener("drag", function onDrag(e) {
  console.log("Dragging");
});

toolbar.addEventListener("dragstart", function onDragStart(e) {
  console.log("Drag Start");
  draggedElm = e.target;
  e.target.style.backgroundColor = "#666666";
});

toolbar.addEventListener("dragend", function onDragEnd(e) {
  console.log("Drag End");

  e.target.style.backgroundColor = "";
});

main.addEventListener("dragover", function onDragOver(e) {
  // prevent default to allow drop for dropzone
  e.preventDefault();
});

main.addEventListener("dragenter", function onDrop(e) {
  console.log("Drag Enter");

  if (e.target.className === "main") {
    e.target.style.backgroundColor = "#bdc3c7";
  }
});

main.addEventListener("dragleave", function onDragLeave(e) {
  console.log("Drag Leave");

  if (e.target.className === "main") {
    e.target.style.backgroundColor = "";
  }
});

main.addEventListener("drop", function onDrop(e) {
  e.preventDefault();
  console.log("Drop", e.target);

  if ((e.target.className = "main")) {
    draggedElm.style.backgroundColor = "";
    draggedElm.removeChild(title);
    draggedElm.parentNode.removeChild(draggedElm);
    e.target.appendChild(draggedElm);
  }
});
