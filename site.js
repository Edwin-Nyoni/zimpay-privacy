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
    image: "./request-money-screens.png",
    alt: "ZivaPay+ Request Money flow showing create, share and payment confirmation screens",
    kicker: "REQUEST MONEY",
    title: "Ask once. Confirm when it lands.",
    copy: "Create and share a request, then confirm a matching payment before it is marked paid.",
    display: "request-flow",
  },
};

// Carry only campaign labels into Google Play. No visitor identifier, cookie,
// local storage, or website interaction history is collected here.
const campaignValue = (value, fallback) => {
  if (!value) return fallback;
  const cleaned = value.toLowerCase().replace(/[^a-z0-9_-]+/g, "_").replace(/^_+|_+$/g, "");
  return cleaned.slice(0, 48) || fallback;
};

const incomingCampaign = new URLSearchParams(window.location.search);
const campaign = campaignValue(incomingCampaign.get("utm_campaign"), "website_launch");
const incomingContent = campaignValue(incomingCampaign.get("utm_content"), "");

document.querySelectorAll("[data-play-placement]").forEach((link) => {
  const destination = new URL(link.href);
  const content = incomingContent || campaignValue(link.dataset.playPlacement, "website");
  const referrer = new URLSearchParams({
    utm_source: "zivapayplus.com",
    utm_medium: "website",
    utm_campaign: campaign,
    utm_content: content,
  });
  destination.searchParams.set("referrer", referrer.toString());
  link.href = destination.toString();
});

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
    pathImage.classList.toggle("request-flow", path.display === "request-flow");
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
