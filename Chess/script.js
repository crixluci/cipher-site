const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  if (response.ok) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Something went wrong. Please try again.");
    }
  })