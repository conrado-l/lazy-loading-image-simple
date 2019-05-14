window.addEventListener('load', (event) => {
    const images = document.querySelectorAll('img');

    images.forEach(image => {

        const imageURL = image.getAttribute('data-src');
        image.setAttribute('src', imageURL)
        image.removeAttribute('data-src')
    })
})