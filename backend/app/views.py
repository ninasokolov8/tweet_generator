from flask import Blueprint, request, jsonify
from flask_cors import CORS  
from .utils.analysis import generate_tweet
from .utils.config.data_conf import AUDIENCE_DATA, INDUSTRY_CONTEXT, PRODUCT_TYPE_MESSAGES

main_blueprint = Blueprint('main', __name__)
CORS(main_blueprint)  

@main_blueprint.route('/config/all')
def get_all_config_data():
    all_data = {
        "audience_data": AUDIENCE_DATA,
        "industry_context": INDUSTRY_CONTEXT,
        "product_type_messages": PRODUCT_TYPE_MESSAGES
    }
    return jsonify(all_data)

@main_blueprint.route('/config/audience')
def get_audience_data():
    return jsonify(AUDIENCE_DATA)

@main_blueprint.route('/config/industry')
def get_industry_data():
    return jsonify(INDUSTRY_CONTEXT)

@main_blueprint.route('/config/product_type')
def get_product_type_data():
    return jsonify(PRODUCT_TYPE_MESSAGES)

@main_blueprint.route('/generate_tweet', methods=['POST'])
def tweet():
    data = request.json
    tweet = generate_tweet(data)
    response = jsonify({"tweet": tweet})
    return response
