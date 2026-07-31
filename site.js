const paths = {
  understand: {
    image: "./screen-home.png",
    alt: "ZivaPay+ home dashboard with balances and spending",
    kicker: "YOUR MONTH",
    title: "See the pattern, not the message pile.",
    copy: "Balances, spending and Financial Health come together on one screen.",
  },
  track: {
    image: "./screen-transactions.png",
    alt: "ZivaPay+ searchable transaction history",
    kicker: "ONE HISTORY",
    title: "Find the transaction you remember.",
    copy: "Search and filter supported EcoCash and InnBucks activity together.",
  },
  prove: {
    image: "./screen-analytics.png",
    alt: "ZivaPay+ monthly analytics and export options",
    kicker: "YOUR RECORDS",
    title: "Turn a month into something useful.",
    copy: "Review the numbers, then export a clean PDF or Excel statement.",
  },
  request: {
    image: "./screen-alerts.png",
    alt: "ZivaPay+ notification settings",
    kicker: "STAY AWARE",
    title: "Notice what matters without watching all day.",
    copy: "Confirm matching payments and choose the alerts that help you stay aware.",
  },
};

const pathButtons = document.querySelectorAll(".path-button");
const pathImage = document.querySelector("#path-image");
const pathKicker = document.querySelector("#path-kicker");
const pathTitle = document.querySelector("#path-title");
const pathCopy = document.querySelector("#path-copy");

function selectPath(button) {
  const path = paths[button.dataset.path];
  if (!path) return;

  pathButtons.forEach((item) => {
    const selected = item === button;
    item.classList.toggle("is-active", selected);
    item.setAttribute("aria-selected", String(selected));
  });

  pathImage.classList.add("is-switching");
  window.setTimeout(() => {
    pathImage.src = path.image;
    pathImage.alt = path.alt;
    pathKicker.textContent = path.kicker;
    pathTitle.textContent = path.title;
    pathCopy.textContent = path.copy;
    pathImage.classList.remove("is-switching");
  }, 150);
}

pathButtons.forEach((button) => {
  button.addEventListener("click", () => selectPath(button));
  button.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowRight" && event.key !== "ArrowUp" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const buttons = [...pathButtons];
    const movement = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
    const next = buttons[(buttons.indexOf(button) + movement + buttons.length) % buttons.length];
    next.focus();
    selectPath(next);
  });
});

const storyTabs = document.querySelectorAll(".story-tab");
const storyViews = document.querySelectorAll(".story-view");

storyTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedStory = tab.dataset.story;
    storyTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    storyViews.forEach((view) => {
      view.classList.toggle("is-active", view.dataset.storyView === selectedStory);
    });
  });
});
