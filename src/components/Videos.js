import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes, faExpand } from '@fortawesome/free-solid-svg-icons'; // Added faExpand icon
import bg3 from './rem.mp4';

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  background: none;
  border: none;
  color: white;
  z-index: 1;
  transition: transform 0.2s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.5); /* Zoom effect */
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  color: black;
`;

const FullscreenButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
  color: white;
`;

const VideoContainer = styled.div`
  position: relative;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
`;

const VideosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const VideoItem = styled.div`
  background-color: #282828;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
`;

const VideoComponent = ({ src, alt, poster }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggle = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      setModalOpen(true);
      setPlaying(true); // Auto play when modal opens
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    videoRef.current.pause();
    setPlaying(false);
  };

  const toggleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) { /* Firefox */
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) { /* IE/Edge */
      videoRef.current.msRequestFullscreen();
    }
  };

  return (
    <VideoContainer>
      <video
        loop
        autoPlay={playing}
        preload="none"
        playsInline
        src={src}
        type="video/mp4"
        aria-label={alt}
        poster={poster}
        ref={videoRef}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
      >
        Your browser does not support the video tag. Please try viewing this page in a modern browser.
      </video>
      {!playing && (
        <PlayButton onClick={handleToggle}>
          <FontAwesomeIcon icon={faPlay} size="3x" />
        </PlayButton>
      )}
      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#282828',
            borderRadius: 20,
            zIndex: 1000,
          }}
        >
          <video
            loop
            autoPlay={true}
            preload="none"
            playsInline
            src={src}
            type="video/mp4"
            aria-label={alt}
            ref={videoRef}
            style={{
              objectFit: 'cover',
              width: 400,
              height: 250,
            }}
          >
            Your browser does not support the video tag. Please try viewing this page in a modern browser.
          </video>
          <CloseButton onClick={handleModalClose}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
          <FullscreenButton onClick={toggleFullscreen}>
            <FontAwesomeIcon icon={faExpand} />
          </FullscreenButton>
        </div>
      )}
    </VideoContainer>
  );
};

const Videos = () => {
  const videos = [
    { id: 1, src: bg3, alt: 'Video 1', poster: 'https://via.placeholder.com/600x400' },
    { id: 2, src: bg3, alt: 'Video 2', poster: 'https://via.placeholder.com/600x400' },
    { id: 3, src: bg3, alt: 'Video 3', poster: 'https://via.placeholder.com/600x400' },
    { id: 4, src: bg3, alt: 'Video 4', poster: 'https://via.placeholder.com/600x400' },
    { id: 5, src: bg3, alt: 'Video 5', poster: 'https://via.placeholder.com/600x400' },
  ];

  return (
    <div>
      <h1>Videos</h1>
      <VideosContainer>
        {videos.map((video) => (
          <VideoItem key={video.id}>
            <VideoComponent src={video.src} alt={video.alt} poster={video.poster} />
          </VideoItem>
        ))}
      </VideosContainer>
    </div>
  );
};

export default Videos;
