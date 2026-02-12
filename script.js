const ratingsButton = document.querySelectorAll(".ratings-btn");
const submitBtn = document.querySelector(".submit-btn");
const ratingsCard = document.querySelector(".ratings-card");
const thankYouCard = document.querySelector(".thank-you-card");
const selectedRatingText = document.getElementById("selectedRating");

let selectedRating = null;

ratingsButton.forEach((button) => {
    button.addEventListener("click", () => {
        ratingsButton.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        selectedRating = button.textContent;
    });
});

submitBtn.addEventListener("click", () => {
    if (!selectedRating) {
        alert("Select a rating first.");
        return
    }

    selectedRatingText.textContent = selectedRating;

    ratingsCard.classList.add("hidden");
    thankYouCard.classList.remove("hidden");
});
