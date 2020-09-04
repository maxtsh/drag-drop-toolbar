import {
  onDrag,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDragEnter,
  onDragLeave,
  onDrop,
} from "./dragdrop";

const toolbar = document.querySelector(".toolbar");
// Iframe
const iframe = document.querySelector(".preview-builder");
const iframeDoc = iframe.contentDocument;

toolbar.addEventListener("drag", onDrag);
toolbar.addEventListener("dragstart", onDragStart);
toolbar.addEventListener("dragend", onDragEnd);
iframeDoc.addEventListener("dragover", onDragOver);
iframeDoc.addEventListener("dragenter", onDragEnter);
iframeDoc.addEventListener("dragleave", onDragLeave);
iframeDoc.addEventListener("drop", onDrop);
