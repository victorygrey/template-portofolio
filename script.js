function scrollToElement(elementSelector, instance = 0) {
    // pilih elementnya
    const elements = document.querySelectorAll(elementSelector);
    // check apakah element itu sama dengan selector dan jika di request dari instance
    if (elements.length > instance) {
        // akan scroll ke tampilan yang dituju
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', ()=> {
    scrollToElement('.header');
});

link2.addEventListener('click', ()=> {
    scrollToElement('.header', 1);
});

link3.addEventListener('click', ()=> {
    scrollToElement('.column');
});