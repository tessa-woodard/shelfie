module.exports = {
    create: (req, res, next) => {
        const db = req.app.get("db")
        const { name, price, img } = req.body

        db.create_product([name, price, img])
            .then(() => res.sendStatus(200))
            .catch((error) => {
                res.status(500).send({ errorMessage: "Opps! Something went wrong" })
                console.log(error)
            })
    },

    getInventory: (req, res, next) => {
        const db = req.app.get("db")

        db.get_inventory()
            .then((products) => res.status(200).send(products))
            .catch((error) => {
                res.status(500).send({ errorMessage: "Opps! Something went wrong" })
                console.log(error)
            })
    },

    deleteProduct: (req, res) => {
        const db = req.app.get("db")
        const { id } = req.params

        db.delete_product(id)
            .then(() => res.sendStatus(200))
            .catch((error) => {
                res.status(500).send({ errorMessage: "Opps! Something went wrong" })
                console.log(error)
            })
    },

    updateProduct: async (req, res) => {
        console.log("hit")
        const db = req.app.get("db")
        const { id } = req.params
        const { name, price, img } = req.body

        let data = await db
            .update_product(id, name, price, img)
            .catch((error) => res.status(500).send(error))

        res.status(200).send(data);
    },
}