document.getElementById('noBtn').addEventListener('mouseenter', function() {
    const x = Math.random() * window.innerWidth - this.offsetWidth;
    const y = Math.random() * window.innerHeight - this.offsetHeight;
    this.style.position = "absolute";
    this.style.left = x + 'px';
    this.style.top = y + 'px';
});
