let counter = 0;


let h1 = document.querySelector("h1");
document.querySelector("html").addEventListener("click", () => {
    counter++;//alert("Ouch! Stop poking me!");
    h1.textContent = counter.toString();
  });
  
