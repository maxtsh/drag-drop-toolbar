let draggedElm;
// Elements
const image = document.getElementById("image");
const title = document.querySelector(".title");

export function onDrag(e) {
  console.log("Dragging");
}

export function onDragStart(e) {
  console.log("Drag Start");
  draggedElm = e.target;
  e.target.style.backgroundColor = "#666666";
}

export function onDragEnd(e) {
  console.log("Drag End");
  e.target.style.backgroundColor = "";
}

export function onDragOver(e) {
  // prevent default to allow drop for dropzone
  e.preventDefault();
}

export function onDragEnter(e) {
  console.log("Drag Enter", e.target);
  e.target.style.backgroundColor = "#bdc3c7";
}

export function onDragLeave(e) {
  console.log("Drag Leave");
  e.target.style.backgroundColor = "";
}

export function onDrop(e) {
  e.preventDefault();
  console.log("Drop", e.target);
  e.target.style.backgroundColor = "";
  draggedElm.style.backgroundColor = "";
  image.style.width = "600px";
  draggedElm.removeChild(title);
  draggedElm.parentNode.removeChild(draggedElm);
  e.target.appendChild(draggedElm);
}
