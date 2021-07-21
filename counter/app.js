// Select value and buttons
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

// set inital value to 0
let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {

    const styles = e.currentTarget.classList;
    if (styles.contains('increase')) {
      value.style.color = 'green';
      count++;
    } else if (styles.contains('decrease')) {
      value.style.color = "red";
      count--;
    } else {
      value.style.color = 'hsl(209, 61%, 16%)';
      count = 0;
    }
    value.textContent = count;
  });
});
