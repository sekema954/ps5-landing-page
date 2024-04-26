//review slider carousel
//review section...slider

let currentReviewIndex = 1;
const totalReviews = 3;

function showNextReview() {
    document.querySelector(`.review${currentReviewIndex}`).style.display = 'none';
    currentReviewIndex = (currentReviewIndex % totalReviews) + 1;
    document.querySelector(`.review${currentReviewIndex}`).style.display = 'block';
}

function showPrevReview() {
    document.querySelector(`.review${currentReviewIndex}`).style.display = 'none';
    currentReviewIndex = (currentReviewIndex - 2 + totalReviews) % totalReviews + 1;
    document.querySelector(`.review${currentReviewIndex}`).style.display = 'block';
}
