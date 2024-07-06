import React from 'react';
import './Document.css'; // Import your CSS file for component-specific styles
import bg3 from './rem.mp4';

const Document = () => {
  const documents = [
    {
      id: 1,
      title: 'Document 1',
      description: 'This is a sample document',
      thumbnail: 'https://via.placeholder.com/150',
      link: 'https://www.orimi.com/pdf-test.pdf',
    },
    {
      id: 2,
      title: 'Document 2',
      description: 'This is a sample document',
      thumbnail: 'https://via.placeholder.com/150',
      link: 'https://example.com/document2.pdf',
    },
    {
      id: 3,
      title: 'Document 3',
      description: 'This is a sample document',
      thumbnail: 'https://via.placeholder.com/150',
      link: 'https://example.com/document3',
    },
    {
      id: 4,
      title: 'Document 4',
      description: 'This is a sample document',
      thumbnail: 'https://via.placeholder.com/150',
      link: 'https://example.com/document4',
    },
    {
      id: 5,
      title: 'Document 5',
      description: 'This is a sample document',
      thumbnail: 'https://via.placeholder.com/150',
      link: 'https://example.com/document5',
    },
    // Add more documents to the array
  ];

  return (
    <div className="document-page">
      <div className='i'>
        <video src={bg3} autoPlay loop muted></video>
    </div>
      <div className="documents-container">
        <h1>Documents</h1>
        <ul className="document-list">
          {documents.map((document) => (
            <li key={document.id} className="document-item">
              <a href={document.link} target="_blank" rel="noopener noreferrer">
                <div className="document-content">
                  <h2>{document.title}</h2>
                  <p>{document.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Document;
