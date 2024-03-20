document.addEventListener('mousemove',(e) => {
    const height = circle.offsetHeight;
    const width = circle.offsetWidth;

    circle.style.left = `${e.pageX - width/2}px`
    circle.style.top = `${e.pageY - height/2}px`
     });