const cursor = document.querySelector('.cursor');
const trail = [];

for (let i = 0; i < 50; i++) {  // Increase the number of trail elements for a longer line
    const trailElement = document.createElement('div');
    trailElement.classList.add('cursor');
    document.body.appendChild(trailElement);
    trail.push(trailElement);
}

document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    for (let i = trail.length - 1; i > 0; i--) {
        trail[i].style.left = trail[i - 1].style.left;
        trail[i].style.top = trail[i - 1].style.top;
    }
    
    trail[0].style.left = e.clientX + 'px';
    trail[0].style.top = e.clientY + 'px';
});
