
module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory()
            .then(products => res.status(200).send(products))
            .catch(err => res.status(500).send(err));
    },
    create: (req, res) => {
        const product = { ...req.body }
        console.log(product);
        const db = req.app.get('db')
        db.create_product(product)
            .then(newProduct => res.status(200).send(newProduct))
            .catch(err => res.status(500).send(err));
    },
    delete: (req, res) => {
        const { id } = req.params
        console.log(id);
        const db = req.app.get('db')
        db.delete_product(+id)
            .then(products => res.status(200).send(products))
            .catch(err => res.status(500).send(err));
    },
    editProduct: (req, res) => {
        const { id } = req.params
        const { product_name, product_img, product_price } = req.body
        const db = req.app.get('db')
        db.edit_product(+id, product_name, product_img, product_price)
            .then(() => {
                console.log('Edit ran 200')
                res.sendStatus(200);
            })
            .catch(err => res.status(500).send(err))
    },
    getProduct: (req, res) => {
        const { id } = req.params;
        const db = req.app.get('db')
        db.get_single_product(+id)
            .then(product => {
                res.status(200).send(product)
            })
            .catch(err => {
                // console.log(err)
                res.status(500).send(err)
            })
    }
}