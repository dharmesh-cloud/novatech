// ===============================
// Scroll Reveal Animation
// ===============================
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    let pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});


// ===============================
// EmailJS Initialization
// ===============================
(function () {
  emailjs.init("GMkh7ZDggFkNOi7jC"); // 🔁 replace with your real Public Key
})();


// ===============================
// NovaTech Contact Form Submission
// ===============================
document.getElementById("novatech-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_bzpphyo", // EmailJS Service ID
    "template_6ybrz6c",         // NovaTech Template ID
    this
  ).then(
    function () {
      alert("Message sent successfully! We will contact you soon.");
      document.getElementById("novatech-form").reset();
    },
    function (error) {
      alert("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    }
  );
});
