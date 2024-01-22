// TweetForm.js
import React, { useState, useEffect } from 'react';
import './TweetForm.css';
import { FormGroup, InputGroup, Button, TextArea, Intent, Callout } from "@blueprintjs/core";
import Select from 'react-select';
import LinkModal from './modals/LinkModal'; 
import ImageModal from './modals/ImageModal'; 

function TweetForm({ onGenerate }) {
  const [audience, setAudience] = useState('');
  const [content, setContent] = useState('');
  const [productName, setProductName] = useState('');
  const [industry, setIndustry] = useState('');
  const [productType, setProductType] = useState('');
  const [links, setLinks] = useState([]);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [audienceOptions, setAudienceOptions] = useState([]);
  const [industryOptions, setIndustryOptions] = useState([]);
  const [productTypeOptions, setProductTypeOptions] = useState([]);
  const [newLink, setNewLink] = useState(''); // Add newLink state
  const [newImage, setNewImage] = useState(''); // Add newImage state
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false); // Add isLinkModalOpen state
  const [isImageModalOpen, setIsImageModalOpen] = useState(false); // Add isImageModalOpen state

  useEffect(() => {
    const fetchConfigData = async () => {
      try {
        const configResponse = await fetch('http://127.0.0.1:5000/config/all');
        const configData = await configResponse.json();

        setAudienceOptions(Object.keys(configData.audience_data));
        setIndustryOptions(Object.keys(configData.industry_context));
        setProductTypeOptions(Object.keys(configData.product_type_messages));

      } catch (error) {
        console.error("Error fetching configuration data:", error);
      }
    };

    fetchConfigData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    // Validate the form inputs
    if (!productName || !industry || !productType || !audience || !content) {
      setError("Please fill out all the required fields.");
      return;
    }

    try {
      // Send the form data to the server for tweet generation
      const response = await onGenerate({ audience, content, productName, industry, productType, links, images });

      // Handle success (you can display a success message here if needed)
    } catch (error) {
      setError("An error occurred while generating the tweet. Please try again later."); // Display an error message
    }
  };

  // Function to open and close the link modal
  const openLinkModal = () => {
    setIsLinkModalOpen(true);
  };

  const closeLinkModal = () => {
    setIsLinkModalOpen(false);
  };

  // Function to open and close the image modal
  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  // Function to add a link
  const addLink = () => {
    closeLinkModal(); // Close the modal
    setLinks([...links, newLink]); // Add the link to the state
    setNewLink(''); // Clear the input
  };

  // Function to add an image
  const addImage = () => {
    closeImageModal(); // Close the modal
    setImages([...images, newImage]); // Add the image to the state
    setNewImage(''); // Clear the input
  };

  const removeLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <Callout intent={Intent.DANGER} icon="error">
          {error}
        </Callout>
      )}
      <FormGroup label="Product Name" labelFor="productName">
        <InputGroup
          id="productName"
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup label="Industry" labelFor="industry">
        <Select
          id="industry"
          value={{ label: industry, value: industry }}
          onChange={(selectedOption) => setIndustry(selectedOption.value)}
          options={industryOptions.map(option => ({ label: option, value: option }))}
          required
          isSearchable={true}
        />
      </FormGroup>
      <FormGroup label="Product Type" labelFor="productType">
        <Select
          id="productType"
          value={{ label: productType, value: productType }}
          onChange={(selectedOption) => setProductType(selectedOption.value)}
          options={productTypeOptions.map(option => ({ label: option, value: option }))}
          required
          isSearchable={true}
        />
      </FormGroup>
      <FormGroup label="Audience" labelFor="audience">
        <Select
          id="audience"
          value={{ label: audience, value: audience }}
          onChange={(selectedOption) => setAudience(selectedOption.value)}
          options={audienceOptions.map(option => ({ label: option, value: option }))}
          required
          isSearchable={true}
        />
      </FormGroup>
      <FormGroup label="Content" labelFor="content">
        <TextArea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </FormGroup>
      {/* Add links and images */}
      <Button type="button" onClick={openLinkModal} text="Add Link" />
      {links.map((link, index) => (
        <div key={`link-${index}`} className="link-container">
          <span>{link}</span>
          <Button type="button" onClick={() => removeLink(index)} text="X" intent={Intent.DANGER} />
        </div>
      ))}
      <Button type="button" onClick={openImageModal} text="Add Image" />
      {images.map((image, index) => (
        <div key={`image-${index}`} className="image-container">
          <img src={image} alt={`Image ${index + 1}`} />
          <Button type="button" onClick={() => removeImage(index)} text="X" intent={Intent.DANGER} />
        </div>
      ))}
      <Button id="submit-btn" type="submit" intent="primary" text="Generate Tweet" />

      <LinkModal // Render LinkModal component
        isOpen={isLinkModalOpen}
        onRequestClose={closeLinkModal}
        newLink={newLink}
        setNewLink={setNewLink}
        addLink={addLink}
      />

      <ImageModal // Render ImageModal component
        isOpen={isImageModalOpen}
        onRequestClose={closeImageModal}
        newImage={newImage}
        setNewImage={setNewImage}
        addImage={addImage}
      />
    </form>
  );
}

export default TweetForm;
