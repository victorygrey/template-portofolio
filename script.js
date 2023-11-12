function scrollToElement(elementSelector, instance = 0) {
    // pilih elementnya
    const elements = document.querySelectorAll(elementSelector);
    // check apakah element itu sama dengan selector dan jika di request dari instance
    if (elements.length > instance) {
        // akan scroll ke tampilan yang dituju
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}