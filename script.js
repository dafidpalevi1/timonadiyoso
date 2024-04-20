let loadMoreBtn = document.querySelector('.load-more-btn #load-more-btn');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let videos = document.querySelectorAll('.video-grid .video-container');

    for (let i = currentItem; i < currentItem + 3; i++) {
        if (i < videos.length) {
            videos[i].style.display = "inline-block";
        } else {
            loadMoreBtn.style.display = "none";
            break;
        }
    }

    currentItem += 3;
};
