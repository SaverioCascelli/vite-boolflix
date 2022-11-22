export default {
    data() {
        return {

            language: '',
        }
    },
    methods: {
        convertInLenguage(language) {
            let lang = 'fi-'
            if (language === 'en') {
                return lang = lang + 'gb'
            }
            return lang + language
        },
        checkFlagExist(language) {

        }
    }
}
