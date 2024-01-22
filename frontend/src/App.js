import React, { useState } from 'react';
import TweetForm from './components/GenerateTweet/TweetForm';
import GeneratedTweet from './components/GenerateTweet/GeneratedTweet';
import axios from 'axios';
import Modal from 'react-modal';

function App() {
  const [tweet, setTweet] = useState('');
  const [formVisible, setFormVisible] = useState(true);

  const handleTweetGeneration = async (formData) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/generate_tweet', formData);
      setTweet(response.data.tweet);
      setFormVisible(false); // Hide the form after tweet generation
    } catch (error) {
      console.error('Error generating tweet:', error);
    }
  };

  const handleGenerateAgain = () => {
    setTweet(''); // Clear the generated tweet
    setFormVisible(true); // Show the form again
  };

  return (
    <div className="App">
      <h1 className="centered">Twitt Generator</h1>
      {formVisible ? (
        <TweetForm onGenerate={handleTweetGeneration} />
      ) : (
        <div>
          <GeneratedTweet tweet={tweet} />
          <button  onClick={handleGenerateAgain}>Generate Again</button>
        </div>
      )}
    </div>
  );
}
Modal.setAppElement('#root');
export default App;
