import React from 'react';
import './GeneratedTweet.css';
import generateTweetLayout from './GenerateTweetLayout'; 

function GeneratedTweet({ tweet }) {
    // Split the content by line breaks to create separate paragraphs
    const contentParagraphs = tweet.content.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));

    // Generate the tweet layout based on the recommended structure
    const tweetLayout = generateTweetLayout(contentParagraphs, tweet.audience, tweet.links, tweet.images); 

    return (
        <div id="generated-tweet" className="generated-tweet">
            <h2 className="generated-tweet-title">Generated Tweet</h2>

            <div className="tweet-content">
                <h3>Audience</h3>
                <p>{tweet.audience}</p>
                
                <h3>Industry</h3>
                <p>{tweet.industry}</p>

                <h3>Product Type</h3>
                <p>{tweet.productType}</p>

                <h3>Content</h3>
                {contentParagraphs}
            </div>

            <div className="tweet-info">
                <div>
                    <h3>Best Time to Post</h3>
                    <p>{tweet.best_hours}</p>
                </div>

                <div>
                    <h3>Recommended Structure</h3>
                    <p>{tweet.recommended_structure}</p>
                </div>
            </div>

            <div className="tweet-preview">
                <h3>Tweet Preview</h3>
                {tweetLayout}
            </div>
        </div>
    );
}

export default GeneratedTweet;
