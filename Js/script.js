let scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    // بعد از 200 پیکسل اسکرول
    scrollTopBtn.style.display = "block";
    scrollTopBtn.style.opacity = "1";
  } else {
    scrollTopBtn.style.opacity = "0";
    setTimeout(() => {
      scrollTopBtn.style.display = "none";
    }, 300); // مخفی‌سازی نرم
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // اسکرول نرم به بالا
  });
});
