const display = document.querySelector(".display");
const buttons = document.querySelectorAll("#button");

[...buttons].forEach((button) => {
  button.addEventListener("click", (e) => {
    let result;
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "";
        break;
      case "DEL":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;

      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }

        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
/* 1-float sayılarda error 
   2-'.' birden çok kullanılabiliyor.
   3-Operatörler ekrana yazılabiliyor(catch bloguna girse bile ekrana yazılıyor.)
*/   