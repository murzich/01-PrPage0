const tabs = document.querySelector(".tabs");

const tabsHandler = (e) => {
    const target = e.target;
    if (e.target.nodeName !== "BUTTON") return;
    const field = document.querySelector("#" + target.dataset.fieldset);
    let currentActive = document.querySelector("._active");
    currentActive.classList.remove("_active");
    field.classList.add("_active")
};

tabs.addEventListener( "click", tabsHandler );