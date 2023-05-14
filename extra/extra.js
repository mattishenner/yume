function escapeCodeTags() {
    var codeTags = document.getElementsByTagName("code");
  
    for (var i = 0; i < codeTags.length; i++) {
      var codeTag = codeTags[i];
      var codeContent = codeTag.innerHTML;
      codeContent = codeContent.replace(/</g, "&lt;");
      codeTag.innerHTML = codeContent;
    }
  }

  escapeCodeTags();


  // Mobile Sidebar
const sidebarIcon = document.querySelector(".sidebar-mobile-icon");
const sidebar = document.querySelector(".sidebar");

sidebarIcon.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-open");
  sidebarIcon.classList.toggle("sidebar-mobile-icon-open");
});



// Accordions
const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  const icon = header.querySelector(".accordion-icon");
  const iconInitialText = icon?.innerText; // using optional chaining operator to avoid error if icon is null
  header.addEventListener("click", () => {
    // Toggle the active class on the parent accordion item
    header.parentNode.classList.toggle("active");
    if (icon && icon.innerText === iconInitialText) { // check if icon exists before accessing its innerText property
      icon.innerText = "-";
    } else if (icon) { // check if icon exists before accessing its innerText property
      icon.innerText = iconInitialText;
    }
  });
});