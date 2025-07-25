document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = e.target.name.value;
    const level = e.target.level.value;

    document.getElementById("message").textContent = `Thank you, ${name}! You've been registered for the ${level} class.`;
    e.target.reset();
});
  