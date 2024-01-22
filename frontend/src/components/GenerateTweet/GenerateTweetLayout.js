import './GenerateTweetLayout.css';


function generateTweetLayout(tweet, audience, links = [], images = []) {
    let tweetLayout;

    switch (audience) {
        case 'youth':
            // Image or video-heavy content with minimal text
            tweetLayout = (
                <div className="tweet-layout">
                    <div className="tweet-media">
                        {images.map((imageUrl, index) => (
                            <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
                        ))}
                    </div>
                    <p>{tweet}</p>
                </div>
            );
            break;

        case 'professionals':
            // Text-heavy with links to articles, infographics, or professional insights
            tweetLayout = (
                <div className="tweet-layout">
                    <div className="tweet-text">
                        <p>{tweet}</p>
                    </div>
                    <div className="tweet-links">
                        {links.map((link, index) => (
                            <a key={index} href={link}>{`Click here for more ${index + 1}`}</a>
                        ))}
                    </div>
                </div>
            );
            break;

        case 'global':
            // Text with images or links, culturally neutral content
            tweetLayout = (
                <div className="tweet-layout">
                    <div className="tweet-text">
                        <p>{tweet}</p>
                    </div>
                    <div className="tweet-media">
                        {images.map((imageUrl, index) => (
                            <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
                        ))}
                        {links.map((link, index) => (
                            <a key={index} href={link}>{`Click here for more ${index + 1}`}</a>
                        ))}
                    </div>
                </div>
            );
            break;

        case 'parents':
            // Images or videos related to family activities, parenting tips, or educational content
            tweetLayout = (
                <div className="tweet-layout">
                    <div className="tweet-media">
                        {images.map((imageUrl, index) => (
                            <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
                        ))}
                    </div>
                    <p>{tweet}</p>
                </div>
            );
            break;

        // other audience types ...

        default:
            // Default layout (can be a mix of text, images, and links)
            tweetLayout = (
                <div className="tweet-layout">
                    <div className="tweet-text">
                        <p>{tweet}</p>
                    </div>
                    <div className="tweet-media">
                        {images.map((imageUrl, index) => (
                            <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
                        ))}
                        {links.map((link, index) => (
                            <a key={index} href={link}>{`Click here for more ${index + 1}`}</a>
                        ))}
                    </div>
                </div>
            );
            break;
    }

    return tweetLayout;
}

export default generateTweetLayout;
