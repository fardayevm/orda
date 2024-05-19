from app import app  # Import the Flask app
from app import db   # Import the database instance
from models import Product, ProductCategory, ProductImage 


def insert_sample_data():
    with app.app_context():
        db.create_all()


        # Create sample categories
        category1 = ProductCategory(name='Bags', description='Various kinds of shoes')

        # Add categories to the session and commit
        db.session.add(category1)
        db.session.commit()

        # Create sample products
        product1 = Product(
            name='Tongiz',
            category_id=category1.id,
            size = 'standard',
            price=59.99,
            description='Compact',
            in_stock=True,
            gender='Unisex'
        )


        product3 = Product(
            name='Tashbaqa',
            category_id=category1.id,
            size = 'standard',
            price=29.99,
            description='Amazing',
            in_stock=True,
            gender='Women'
        )

        product4 = Product(
            name='Tadbirkor',
            category_id=category1.id,
            size = 'standard',
            price=129.99,
            description='unbelievable',
            in_stock=True,
            gender='Men'
        )

        product5 = Product(
            name='Paxtakor',
            category_id=category1.id,
            size = 'standard',
            price=29.99,
            description='heavenly',
            in_stock=True,
            gender='Women'
        )


        product7 = Product(
            name='Katlama',
            category_id=category1.id,
            size = 'standard',
            price=99.99,
            description='great one',
            in_stock=True,
            gender='Women'
        )

        product8 = Product(
            name='Jilov',
            category_id=category1.id,
            size = 'standard',
            price=99.99,
            description='the best',
            in_stock=True,
            gender='Women'
        )


        product10 = Product(
            name='Farosh',
            category_id=category1.id,
            size = 'standard',
            price=99.99,
            description='fabulous',
            in_stock=True,
            gender='Women'
        )


        product12 = Product(
            name='Aqlvoy',
            category_id=category1.id,
            size = 'standard',
            price=89.99,
            description='formidable',
            in_stock=True,
            gender='Women'
        )

        product13 = Product(
            name='Ahmoq',
            category_id=category1.id,
            size = 'standard',
            price=25.99,
            description='unimaginably good',
            in_stock=True,
            gender='Men'
        )

        # Add products to the session
        db.session.add(product1)
        db.session.add(product3)
        db.session.add(product4)
        db.session.add(product5)
        db.session.add(product7)
        db.session.add(product8)
        db.session.add(product10)
        db.session.add(product12)
        db.session.add(product13)

        db.session.commit()

        # Create sample product images
        image_urls_product1 = [
            '/products/Tongiz01',
            '/products/Tongiz02',
            '/products/Tongiz03'
        ]

        for url in image_urls_product1:
            image = ProductImage(product_id=product1.id, image_url=url)
            db.session.add(image)


        image_urls_product3 = [
            '/products/Tashbaqa01',
            '/products/Tashbaqa02',
            '/products/Tashbaqa03'
        ]

        for url in image_urls_product3:
            image = ProductImage(product_id=product3.id, image_url=url)
            db.session.add(image)

        image_urls_product4 = [
            '/products/Tadbirkor01',
            '/products/Tadbirkor02',
            '/products/Tadbirkor03',
        ]

        for url in image_urls_product4:
            image = ProductImage(product_id=product4.id, image_url=url)
            db.session.add(image)

        image_urls_product5 = [
            '/products/Paxtakor01',
            '/products/Paxtakor02',
            '/products/Paxtakor03'
        ]

        for url in image_urls_product5:
            image = ProductImage(product_id=product5.id, image_url=url)
            db.session.add(image)


        image_urls_product7 = [
            '/products/Katlama01',
            '/products/Katlama02',
            '/products/Katlama03',
        ]

        for url in image_urls_product7:
            image = ProductImage(product_id=product7.id, image_url=url)
            db.session.add(image)

        image_urls_product8 = [
            '/products/Jilov01',
            '/products/Jilov02',
            '/products/Jilov03'
        ]

        for url in image_urls_product8:
            image = ProductImage(product_id=product8.id, image_url=url)
            db.session.add(image)


        image_urls_product10 = [
            '/products/Farosh01',
            '/products/Farosh02',
            '/products/Farosh03'
        ]

        for url in image_urls_product10:
            image = ProductImage(product_id=product10.id, image_url=url)
            db.session.add(image)


        image_urls_product12 = [
            '/products/Aqlvoy01',
            '/products/Aqlvoy02',
            '/products/Aqlvoy03',
        ]

        for url in image_urls_product12:
            image = ProductImage(product_id=product12.id, image_url=url)
            db.session.add(image)

        image_urls_product13 = [
            '/products/Ahmoq01',
            '/products/Ahmoq02',
            '/products/Ahmoq03',
            '/products/Ahmoq04'
        ]

        for url in image_urls_product13:
            image = ProductImage(product_id=product13.id, image_url=url)
            db.session.add(image)

        db.session.commit()


if __name__ == "__main__":
    insert_sample_data()

