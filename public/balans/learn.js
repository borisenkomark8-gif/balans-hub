(() => {
  const openHashTarget = () => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const target = document.getElementById(id);
    if (target?.tagName === "DETAILS") target.open = true;
  };

  document.querySelectorAll('.topic-index a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target?.tagName === "DETAILS") target.open = true;
    });
  });

  window.addEventListener("hashchange", openHashTarget);
  openHashTarget();
})();
