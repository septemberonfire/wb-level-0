export const toggleHandler = (e) => {
  const currentEl = e.target;
  const availableSection = document.querySelector(".basket_products");
  const unavailableSection = document.querySelector(".basket_absentProducts");
  const isAvailableProductSection = Boolean(
    currentEl.closest(".basket_checkboxWrap")
  );
  const currentSection = isAvailableProductSection
    ? availableSection
    : unavailableSection;

  if (currentEl.classList.contains("basket_dropdownButton-closed")) {
    currentSection.style.display = "grid";
  } else currentSection.style.display = "none";
  currentEl.classList.toggle("basket_dropdownButton-closed");
};
