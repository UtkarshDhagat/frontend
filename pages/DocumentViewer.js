import React, { useState } from 'react';
import ChatbotInterface from './ChatbotInterface'; // Ensure correct path
import './DocumentViewer.css'; // Ensure CSS file exists

const DocumentViewer = ({ pdfUrl }) => {
  const [selectedOption, setSelectedOption] = useState('chatbot');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="document-viewer">
      <div className="left-section">
        <iframe
          className="pdf-document"
          src={pdfUrl}
          title="PDF Document"
          frameBorder="0"
        ></iframe>
      </div>
      <div className="right-section">
        <div className="options">
          <button className="option" onClick={() => handleOptionChange('chatbot')}>Chatbot</button>
          <button className="option" onClick={() => handleOptionChange('report')}>Actual Report</button>
          <button className="option" onClick={() => handleOptionChange('summarizer')}>Summarizer</button>
        </div>
        <div className="content">
          {selectedOption === 'chatbot' && <ChatbotInterface />}
          {selectedOption === 'report' && (
            <div className="report-content">
              {/* Placeholder for Actual Report content */}
              <p>This is the actual PDF report view.</p>
              {/* You can embed another PDF viewer here if needed */}
            </div>
          )}
          {selectedOption === 'summarizer' && (
            <div className="summarizer-content">
              {/* Placeholder for Summarizer content */}
              <p>This is the summarizer content.</p>
              {/* Implement your summarizer content or component here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
