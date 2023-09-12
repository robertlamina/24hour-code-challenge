
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
        },
        getSubtotal() {
            const cartItems = localStorage.hasOwnProperty('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
            this.subtotal = 0

            this.$_.forEach(cartItems, (item) => {
                this.subtotal = Number(this.subtotal) + Number(item.quantity) * Number(item.price)
            })

            this.subtotal = this.$_.round(this.subtotal, 2).toFixed(2)
        }
    }
}