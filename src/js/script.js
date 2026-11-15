function scrollDown(event) {
    event.preventDefault();

    document.querySelector('#buy').scrollIntoView({
        behavior: "smooth"
    });
}