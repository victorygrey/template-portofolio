function scrollToElement(elementSelector, instance = 0) {
    // select the element
    const elements = document.querySelectorAll(elementSelector);
    // check if the element matches the selector and if requested by instance
    if (elements.length > instance) {
        // akan scroll ke tampilan yang dituju
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const HEADER_SELECTOR = '.header';

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', ()=> {
    scrollToElement(HEADER_SELECTOR);
});

link2.addEventListener('click', ()=> {
    scrollToElement(HEADER_SELECTOR, 1);
});
// Define a constant to clarify the purpose of the instance parameter
const SECOND_HEADER_INSTANCE = 1;

scrollToElement('.header', 1);
    scrollToElement('.header', SECOND_HEADER_INSTANCE);

const COLUMN_SELECTOR = '.column';

link3.addEventListener('click', ()=> {
    scrollToElement(COLUMN_SELECTOR);
});
link3.addEventListener('click', ()=> {
    scrollToElement('.column');
});