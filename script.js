const targetNode = document.body;
const config = { childList: true, subtree: true };

const callback = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      const addedNodes = mutation.addedNodes;
      for (const addedNode of addedNodes) {
        if (addedNode instanceof HTMLElement) {
          if (document.querySelector('.fc-ab-root')) {
            document.body.style.overflow = "visible";
            addedNode.remove();
          }
        }
      }
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
