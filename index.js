var line = document.getElementById("grab");
var btn = document.querySelector("#button");

// Add a variable to store the original button text
var originalButtonText = btn.innerHTML;

btn.addEventListener("click", () => {
  // Hide the "Generate" text and add the loading animation to the button
  btn.innerHTML = ""; // Clear the text
  btn.classList.add("loading");
  btn.disabled = true; // Disable button to prevent multiple clicks

  var url = "https://rizzonator.onrender.com/rizzgen/pick-one";

  // Simulate delay for demonstration purposes (optional)
  setTimeout(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
        }
      })
      .then((data) => {
        line.innerHTML = data.line;
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        // Remove loading animation, restore the button text, and re-enable the button
        btn.classList.remove("loading");
        btn.innerHTML = originalButtonText; // Restore the original text
        btn.disabled = false;
      });
  }, 1000); // Simulate network delay of 1 second
});
