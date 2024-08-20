
const accordionItem = document.querySelectorAll('.accordion-item');
for (let item of accordionItem) {
    item.addEventListener('click', (e) => {
        item.classList.toggle('is-open');
    })
}
