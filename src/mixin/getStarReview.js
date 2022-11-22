export default {
    data() {
        return {
            reviews: 0,

        }
    },
    methods: {

        getStarReview(review) {
            let numbOfStars = Math.ceil(Math.ceil(review) / 2);
            let emptyStars = 5 - numbOfStars;
            let starsString = '';
            console.log(numbOfStars);
            for (let i = 0; i < numbOfStars; i++) {
                starsString = starsString + `<i class="fa-solid fa-star"></i>`;
            }

            for (let i = emptyStars; i > 0; i--) {
                starsString = starsString + `<i class="fa-regular fa-star"></i>`
            }
            return starsString;
        }
    }
}