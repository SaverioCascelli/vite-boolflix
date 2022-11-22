export default {
    data() {
        return {
            imgBeginUrl: 'https://image.tmdb.org/t/p/',
            imgSize: 'w154/'
        }
    },
    methods: {
        genImgUrl(urlReference) {
            return this.imgBeginUrl + this.imgSize + urlReference
        }
    }
}