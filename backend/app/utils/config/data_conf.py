# External Configuration

# Audience-specific data
AUDIENCE_DATA = {
    'youth': {
        'best_hours': '4 PM to 8 PM',
        'structure': 'Image or video-heavy content with minimal text',
        'intro_message': 'Hey young minds!',
        'persuasive_message': 'Unlock excitement and adventure in your life!'
    },
    'professionals': {
        'best_hours': '7 AM to 9 AM and 5 PM to 7 PM',
        'structure': 'Text-heavy with links to articles, infographics, or professional insights',
        'intro_message': 'For the professionals on the move:',
        'persuasive_message': 'Boost your productivity and success!'
    },
    'global': {
        'best_hours': 'Round the clock with emphasis on 8 AM to 10 AM GMT',
        'structure': 'Text with images or links, culturally neutral content',
        'intro_message': 'To our global audience:',
        'persuasive_message': 'Join the global movement for a brighter future!'
    },
    'parents': {
        'best_hours': '10 AM to 12 PM and 7 PM to 9 PM',
        'structure': 'Images or videos related to family activities, parenting tips, or educational content',
        'intro_message': "Parents, this one's for you:",
        'persuasive_message': 'Create unforgettable moments with your loved ones!'
    },
    'gamers': {
        'best_hours': '8 PM to 12 AM',
        'structure': 'Videos (gameplay clips, trailers), images (memes, game screenshots), announcements',
        'intro_message': 'Gamers, get ready:',
        'persuasive_message': 'Level up your gaming experience like never before!'
    },
    'early risers': {
        'best_hours': '5 AM to 7 AM',
        'structure': 'Inspirational quotes or images, short videos, and brief text posts',
        'intro_message': 'To the early birds out there:',
        'persuasive_message': 'Start your day with energy and positivity!'
    },
    'night owls': {
        'best_hours': '10 PM to 2 AM',
        'structure': 'Entertaining videos, music links, funny memes, or engaging questions',
        'intro_message': 'Night owls, check this out:',
        'persuasive_message': 'Make your nights more entertaining and enjoyable!'
    },
    'fitness enthusiasts': {
        'best_hours': '5 AM to 7 AM and 6 PM to 8 PM',
        'structure': 'Images or videos of workouts, health tips, motivational quotes',
        'intro_message': 'Fitness lovers:',
        'persuasive_message': 'Achieve your fitness goals with us!'
    },
    'business executives': {
        'best_hours': '6 AM to 8 AM and 6 PM to 8 PM',
        'structure': 'Text posts with links to industry news, market trends, thought leadership articles',
        'intro_message': 'Business leaders, take note:',
        'persuasive_message': 'Stay ahead in the competitive business world!'
    },
    'students': {
        'best_hours': '3 PM to 5 PM and 9 PM to 11 PM',
        'structure': 'Informative videos, educational links, study tips, infographics',
        'intro_message': "Students, here's something for you:",
        'persuasive_message': 'Enhance your learning journey with our support!'
    },
    'retirees': {
        'best_hours': '9 AM to 11 AM and 4 PM to 6 PM',
        'structure': 'Relaxing videos, informative articles, light-hearted content',
        'intro_message': 'To our esteemed retirees:',
        'persuasive_message': 'Enjoy your golden years with engaging content!'
    },
    'travel enthusiasts': {
        'best_hours': '6 PM to 9 PM',
        'structure': 'Travel photos, destination videos, and travel tips',
        'intro_message': 'Wanderlust souls:',
        'persuasive_message': 'Embark on a new adventure with us!'
    },
    'foodies': {
        'best_hours': '11 AM to 1 PM and 6 PM to 8 PM',
        'structure': 'Delicious food images, recipes, and dining experiences',
        'intro_message': 'For the food lovers:',
        'persuasive_message': 'Satisfy your cravings with our delectable delights!'
    },
    'others': {
        'best_hours': 'Best hours: Anytime during the day',
        'structure': 'Varied content (text, image, video, links)',
        'intro_message': "Here's something special:",
        'persuasive_message': 'Experience something extraordinary today!'
    }
}

# Industry-specific context
INDUSTRY_CONTEXT = {
    'Technology': 'Explore cutting-edge ',
    'Healthcare': 'Enhance your well-being with our ',
    'Education': 'Educational ',
    'Entertainment': 'Exciting ',
    'Finance': 'Financial ',
    'Retail': 'Discover our exceptional ',
    'Travel': 'Embark on your next adventure with our ',
    'Food and Beverage': 'Taste the difference with our ',
    'Automotive': 'Experience the thrill with our ',
    'Real Estate': 'Find your dream space with our ',
    'Fashion': 'Style yourself with our latest ',
    'Fitness and Wellness': 'Elevate your health and wellness with our ',
    'Beauty and Personal Care': 'Revitalize your beauty routine with our ',
    'Sports': 'Gear up for the game with our ',
    'Arts and Crafts': 'Unleash your creativity with our ',
    'Agriculture': 'Nourish with our natural ',
    'Manufacturing': 'Experience precision and quality with our ',
    'Energy': 'Power up with our sustainable ',
    'Legal Services': 'Secure your interests with our ',
    'Consulting': 'Gain expert insights with our ',
    'Non-Profit': 'Join our mission to make a difference with ',
    'Telecommunications': 'Stay connected with our ',
    'Media and Publishing': 'Discover compelling stories with our ',
    'Environmental Services': 'Protect our planet with our ',
    'Logistics and Transportation': 'Streamline your journeys with our ',
    'Hospitality': 'Enjoy unparalleled hospitality with our ',
    'Others': 'Discover our '
}


# Product type-specific messages
PRODUCT_TYPE_MESSAGES = {
    'Physical': 'Discover our tangible product:',
    'Digital': 'Experience our digital solution:',
    'Service': 'Enjoy our exceptional service:',
    'Subscription': 'Unlock continuous value with our subscription:',
    'Software': 'Upgrade your efficiency with our software:',
    'Hardware': 'Enhance your experience with our hardware:',
    'E-Book': 'Dive into knowledge with our e-book:',
    'Online Course': 'Learn and grow with our online course:',
    'Event Ticket': 'Be part of the excitement with our event tickets:',
    'Membership': 'Join our exclusive community with a membership:',
    'Gift Card': 'Give the gift of choice with our gift cards:',
    'Apparel': 'Style your look with our apparel:',
    'Accessory': 'Complete your outfit with our accessories:',
    'Beauty Product': 'Revitalize your beauty routine with our products:',
    'Fitness Equipment': 'Elevate your workouts with our fitness equipment:',
    'Home Goods': 'Beautify your space with our home goods:',
    'Food Item': 'Savor the flavors of our food items:',
    'Beverage': 'Refresh yourself with our beverages:',
    'Travel Package': 'Explore new horizons with our travel packages:',
    'Artwork': 'Decorate your world with our artwork:',
    'Handmade Goods': 'Appreciate the craftsmanship of our handmade goods:',
    'Technology Gadgets': 'Embrace innovation with our technology gadgets:',
    'Pet Supplies': 'Pamper your pets with our supplies:',
    'Gardening Products': 'Cultivate beauty with our gardening products:',
    'Others': 'Explore our latest offering:'
}

