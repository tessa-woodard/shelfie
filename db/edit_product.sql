UPDATE products
SET product_name = $2,
    product_img = $3,
    product_price = $4
    WHERE product_id = $1;

-- SELECT * FROM products;