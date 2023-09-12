
export default {
    methods: {
        getCartItems() {
            this.cartItems = localStorage.hasOwnProperty('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
        },
        calculateSubTotal(price, quantity) {
            return Number(price) * Number(quantity)
        },
        totalItems() {
            let totalItems = 0

            this.$_.forEach(this.cartItems, (item) => {
                totalItems = Number(totalItems) + Number(item.quantity)
            })

            return totalItems
        }
    }
}