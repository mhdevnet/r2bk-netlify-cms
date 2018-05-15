const smoothScrollTo = function (e) {
    e.preventDefault();
    let elem = e.target;
    // if (location.pathname.replace(/^\//, '') == component.pathname.replace(/^\//, '') && location.hostname == component.hostname) {
        var target = document.querySelector(elem.hash);
        target = target ? target : document.querySelector('[name=' + elem.hash.slice(1) + ']');
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            return false;
        }
    // }
    return false;
}

export default smoothScrollTo
