from .config.data_conf import AUDIENCE_DATA, INDUSTRY_CONTEXT, PRODUCT_TYPE_MESSAGES

def generate_tweet(data):
    audience = data.get('audience', 'others')
    industry = data.get('industry', 'Others')
    product_type = data.get('productType', 'Others')
    content = data.get('content')
    product_name = data.get('productName')
    links = data.get('links', [])  
    images = data.get('images', [])  

    best_hours = get_best_hours(audience)
    recommended_structure = get_recommended_structure(audience)
    tailored_content = tailor_content(content, audience, industry, product_name, product_type)

    return {
        "audience": audience,
        "industry": industry,
        "productType": product_type,
        "content": tailored_content,
        "links": links, 
        "images": images,  
        "best_hours": best_hours,
        "recommended_structure": recommended_structure
    }

def get_best_hours(audience):
    return AUDIENCE_DATA.get(audience, {}).get('best_hours', 'Best hours: Anytime during the day')

def get_recommended_structure(audience):
    return AUDIENCE_DATA.get(audience, {}).get('structure', 'Optimal structure: Varied content (text, image, video, links)')

def tailor_content(content, audience, industry, product_name, product_type):
    audience_message = get_audience_message(audience)
    industry_context = get_industry_context(industry, product_name)
    product_type_message = get_product_type_message(product_type)
    persuasive_message = get_persuasive_message(audience, product_type)

    formatted_content = f"{audience_message}\n\n{industry_context}\n\n{product_type_message}\n\n{content}\n\n{persuasive_message}"
    return formatted_content

def get_audience_message(audience):
    return AUDIENCE_DATA.get(audience, {}).get('intro_message', "Here's something special:")

def get_industry_context(industry, product_name):
    return INDUSTRY_CONTEXT.get(industry, "Discover our ") + product_name

def get_product_type_message(product_type):
    return PRODUCT_TYPE_MESSAGES.get(product_type, 'Explore our latest offering:')

def get_persuasive_message(audience, product_type):
    message = AUDIENCE_DATA.get(audience, {}).get('persuasive_message', 'Experience something extraordinary today!')
    return message
