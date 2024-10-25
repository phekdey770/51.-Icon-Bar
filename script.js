function setActive(element) {
    const icons = document.querySelectorAll('.icon-bar a');
    icons.forEach(icon => icon.classList.remove('active'));
    element.classList.add('active');
}
