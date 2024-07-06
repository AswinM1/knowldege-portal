import React, { useState } from "react";
import styled from "styled-components";
import Masonry from "react-responsive-masonry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './image.css'; 
import bg3 from './rem.mp4'; 

const GalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
`;

const ImageContainer = styled.div`
  position: relative;
  padding: 5px;
  background-color: #282828; /* Changed background color to dark */
  margin: 10px;
  border-radius: 20px;
  overflow: hidden; /* Hide overflow to contain pseudo-element */
  transition: box-shadow 0.4s ease; /* Smooth transition for box-shadow */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Drop shadow */

  &:hover {
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.8); /* Inner box shadow */
    transform: scale(1.05); /* Zoom effect */
  }

  &::before {
    content: ''; /* Required for pseudo-elements */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.8) 80%);
    pointer-events: none; /* Allow interactions with underlying elements */
    opacity: 0; 
    transition: opacity 0.4s ease; 
  }

  &:hover::before {
    opacity: 1; 
  }
`;

const ImageText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 10px; /* Add padding for spacing */
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  color: #fff;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Description = styled.div`
  font-size: 14px;
`;

const ImageComponent = ({ src, alt, name, description, onClick }) => {
  return (
    <ImageContainer onClick={onClick}>
      <img
        src={src}
        alt={alt}
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          borderRadius: "20px", // Adjusted for consistency
        }}
      />
      <ImageText>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </ImageText>
    </ImageContainer>
  );
};

const ImageModal = ({ src, alt, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#282828",
        padding: "1px",
        borderRadius: 10,
        zIndex: 1000,
      }}
    >
      <div style={{ position: 'relative' }}>
        <img
          src={src}
          alt={alt}
          style={{
            objectFit: "contain",
            maxWidth: "100%",
            maxHeight: "80vh", // Adjust as needed for modal size
          }}
        />
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'black',
            fontSize: '30px',
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

const ImageGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: "https://via.placeholder.com/600x400", // Example placeholder URL
      alt: "Image 1",
      name: "Sample heading",
      description: "lorem ipsum jshdj kjshds  kjshdsjd ",
    },
    {
      id: 1,
      src: "https://via.placeholder.com/600x400", // Example placeholder URL
      alt: "Image 1",
      name: "Sample heading",
      description: "lorem ipsum jshdj kjshds  kjshdsjd ",
    },
    {
      id: 1,
      src: "https://via.placeholder.com/600x400", // Example placeholder URL
      alt: "Image 1",
      name: "Sample heading",
      description: "lorem ipsum jshdj kjshds  kjshdsjd ",
    },
    
    
    
  ];

  const handleImageClick = (image) => {
    setModalOpen(true);
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
       <div className='ij'>
          <video src={bg3} autoPlay loop muted></video>
      </div> 
      <div>
        <h1>Visit the gallery</h1>
        <GalleryContainer>
          <Masonry columnsCount={3} gutter="16px">
            {images.map((image) => (
              <ImageComponent
                key={image.id}
                src={image.src}
                alt={image.alt}
                name={image.name}
                description={image.description}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </Masonry>
        </GalleryContainer>
        {modalOpen && (
          <ImageModal
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClose={handleModalClose}
          />
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
