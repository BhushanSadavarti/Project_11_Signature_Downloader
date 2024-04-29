
const canvas = document.getElementById("signature-canvas");
const ctx = canvas.getContext('2d');

let isDrawing = false;
ctx.lineWidth = 2;
ctx.strokeStyle ="#000";

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
  });

  canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  });
canvas.addEventListener('mouseup', () => {
    isDrawing = false
})

const clearButton = document.getElementById("clear-btn");
clearButton.addEventListener("click", ()=> {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

const downloadButton = document.getElementById("download-btn");
downloadButton.addEventListener("click", () => {

        const compositeCanvas = document.createElement('canvas');
    compositeCanvas.width = canvas.width; // Match original canvas size
    compositeCanvas.height = canvas.height; // Match original canvas size
    const compositeCtx = compositeCanvas.getContext('2d');

    compositeCtx.fillStyle = '#fff'; // White color
    compositeCtx.fillRect(0, 0, compositeCanvas.width, compositeCanvas.height);

    compositeCtx.drawImage(canvas, 0, 0);
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "Signature.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

