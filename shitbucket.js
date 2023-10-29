// Select the node that will be observed for mutations
const targetNode = document.getElementById("root");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

const iconsPath = browser.runtime.getURL("icons/new-logo.svg");

// Callback function to execute when mutations are observed
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

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

console.log('running');
