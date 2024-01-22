from flask import Flask
from flask_cors import CORS
from .views import main_blueprint

def create_app():
    app = Flask(__name__)
    # Allow requests from any origin for all routes
    CORS(app, resources={r"*": {"origins": "*"}})
    app.register_blueprint(main_blueprint)
    return app
