document.getElementById('changeBtn').addEventListener('click', function() {
    var image = document.getElementById('image');
    var currentSrc = image.src;
    
    if (currentSrc.endsWith('smiley.png')) {
        image.src = 'sad.png';
        document.body.style.backgroundColor = '#ffcccc'; // Light red color
    } else {
        image.src = 'smiley.png';
        document.body.style.backgroundColor = '#f0f0f0'; // Reset background color
    }
});
