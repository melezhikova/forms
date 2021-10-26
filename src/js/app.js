// TODO: write your code here
const button = document.querySelector('.btn');

function showPopover() {
  const popoverInDom = document.querySelector('.popover');
  if (popoverInDom) {
    button.removeChild(popoverInDom);
  } else {
    const popover = document.createElement('div');
    popover.className = 'popover';
    const popoverTitle = document.createElement('h3');
    popoverTitle.className = 'title';
    popoverTitle.textContent = 'Popover title';
    const popoverBody = document.createElement('div');
    popoverBody.className = 'popoverBody';
    popoverBody.textContent = "And here's some amazing content. It's very engaging. Right?";
    const arrow = document.createElement('div');
    arrow.className = 'arrow';
    button.appendChild(popover);
    popover.appendChild(popoverTitle);
    popover.appendChild(popoverBody);
    popover.appendChild(arrow);
    popover.style.top = `${0 - popover.offsetHeight - 10}px`;
    popover.style.left = '0px';
    arrow.style.left = `${popover.offsetWidth / 2 - arrow.offsetWidth / 2}px`;
  }
}

button.addEventListener('click', showPopover);
