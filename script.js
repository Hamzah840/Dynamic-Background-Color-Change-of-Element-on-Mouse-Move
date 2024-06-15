const box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
  const boxArea = e.target.getBoundingClientRect();
  const mouseX = e.clientX - boxArea.x;
  const halfWidth = boxArea.width / 2;
  const percent = (mouseX - halfWidth) / 255;

  const red = Math.floor(Math.max(0, -percent * 255));
  const blue = Math.floor(Math.max(0, percent * 255));

  box.style.backgroundColor = `rgb(${red}, 0, ${blue})`;
});

box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "#fff";
});
