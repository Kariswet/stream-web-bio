// Function to copy links to clipboard
function copyToClipboard(text) {
    // Create a temporary input element
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Link copied to clipboard: " + text);
  }
  
  // Add click event listener to all links with data-copy attribute
  const linkButtons = document.querySelectorAll(".link-button");
  linkButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the link from opening immediately
      const link = this.getAttribute("data-copy");
      copyToClipboard(link);
    });
  });
  
  // Reveal hidden links when button is clicked
  const revealBtn = document.getElementById("reveal-btn");
  const hiddenLinks = document.getElementById("hidden-links");
  
  revealBtn.addEventListener("click", function () {
    if (hiddenLinks.style.display === "none") {
      hiddenLinks.style.display = "block"; // Show hidden links
      revealBtn.textContent = "Hide Links"; // Change button text
    } else {
      hiddenLinks.style.display = "none"; // Hide links again
      revealBtn.textContent = "Reveal More Links"; // Change button text back
    }
  });
  