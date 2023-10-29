const iconsPath = browser.runtime.getURL("icons/new-logo.svg");

let link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = iconsPath;

const targetNode = document.getElementById("root");

const config = { attributes: true, childList: true, subtree: true };

const callback = (mutationList, observer) => {
    let shouldUpdate = true;
    for (const mutation of mutationList) {
        if (mutation.target.parentNode.getAttribute("data-testid") === 'product-home-logo') {
            shouldUpdate = false
        }
    }
    if (shouldUpdate) {
        const logo = document.querySelector("[data-testid='product-home-logo'] > div");
        logo.innerHTML = `<img src='${iconsPath}' class='newLogoImage' /></i><span class='newLogoText'>Shitbucket</span>`
    }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);
