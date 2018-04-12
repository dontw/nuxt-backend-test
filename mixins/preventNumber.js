export default {
    methods: {
        preventNumber(evt) {
            if (evt.which >= 48 && evt.which <= 57) {
                evt.preventDefault()
            }
        }
    }
}
