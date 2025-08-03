document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0, // Trigger when 10% of the element is visible
    }
  );

  const elements = document.querySelectorAll(".slide-in, .slide-in-right");
  elements.forEach((el) => observer.observe(el));
});
