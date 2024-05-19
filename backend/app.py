from flask import Flask, jsonify, request, session
from models import db, User, Product, ProductImage, ProductCategory, Order, Cart, Payment
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from flask_cors import CORS
from sqlalchemy import or_

app = Flask(__name__)

CORS(app)

app.config['SECRET_KEY']= 'cairocoders-ednalan'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flaskdb.db'

SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True

bcrypt= Bcrypt(app)
CORS(app, supports_credentials=True)
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route("/signup", methods=["POST"])
def signup():
    email = request.json["email"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists :
        return jsonify({"error": "Email already exists"}), 409
    

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.id


    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })

@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized Access"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unathorized"}), 401
    

    session["user_id"]=user.id
    return jsonify({
        "id": user.id,
        "email": user.email
    })

@app.route('/api/new-arrivals', methods=['GET'])
def get_new_arrivals():
    products = Product.query.all()  # Adjust this query based on your requirements
    product_data = []
    for product in products:
        # Fetch images for each product
        images = ProductImage.query.filter_by(product_id=product.id).all()
        image_urls = [image.image_url for image in images]

        # Append product data with images
        product_data.append({
            'id': product.id, 
            'name': product.name, 
            'price': product.price, 
            'category': product.category.name,  # Assuming a 'category' relationship
            'in_stock': product.in_stock,
            'description': product.description,
            'images': image_urls
        })

    return jsonify(product_data)

@app.route('/api/products/<int:product_id>')
def get_product(product_id):
    # Query for the product by ID
    product = Product.query.get(product_id)
    if not product:
        return jsonify({'message': 'Product not found'}), 404

    # Assuming each product has multiple images, and you have a relationship set up
    # between Product and ProductImage models
    image_urls = [image.image_url for image in product.images]

    # Construct the response object
    product_data = {
        'id': product.id,
        'name': product.name,
        'description': product.description,
        'price': product.price,
        'images': image_urls,
        'color': product.color  # Adjust according to your model
    }

    return jsonify(product_data)


@app.route('/api/women', methods=['GET'])
def get_womens_products():
    women_and_unisex_products = Product.query.filter(
        or_(Product.gender == 'Women', Product.gender == 'Unisex')
    ).all()
    product_data = []
    for product in women_and_unisex_products:
        # Fetch images for each product
        images = ProductImage.query.filter_by(product_id=product.id).all()
        image_urls = [image.image_url for image in images]

        # Append product data with images
        product_data.append({
            'id': product.id, 
            'name': product.name, 
            'price': product.price, 
            'category': product.category.name,  # Assuming a 'category' relationship
            'gender': product.gender,
            'in_stock': product.in_stock,
            'description': product.description,
            'images': image_urls
        })
    return jsonify(product_data)


@app.route('/api/men', methods=['GET'])
def get_mens_products():
    men_and_unisex_products = Product.query.filter(
        or_(Product.gender == 'Men', Product.gender == 'Unisex')
    ).all()
    product_data = []
    for product in men_and_unisex_products:
        # Fetch images for each product
        images = ProductImage.query.filter_by(product_id=product.id).all()
        image_urls = [image.image_url for image in images]

        # Append product data with images
        product_data.append({
            'id': product.id, 
            'name': product.name, 
            'price': product.price, 
            'category': product.category.name,  # Assuming a 'category' relationship
            'gender': product.gender,
            'in_stock': product.in_stock,
            'description': product.description,
            'images': image_urls
        })
    return jsonify(product_data)





if __name__ == "__main__":
    app.run(debug=True)