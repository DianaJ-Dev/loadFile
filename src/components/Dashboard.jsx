import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt, faCheckCircle, faTimesCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import '../css/Dashboard.css';
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "../helpers/AuthHelper";

export const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [canUpload, setCanUpload] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      setUploaded(true);
      setCanUpload(false);
      setTimeout(() => {
        setUploaded(false);
        setCanUpload(true);
        setFile(null);
      }, 10000);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login')
  };

  const handleExit = () => {
    setFile(null);
    setUploaded(false);
    setCanUpload(true);
  };

  // Drag and Drop Handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  return (
    <div className="upload-container">
      <button className="logout-button" onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
      </button>
      
      {!uploaded && canUpload && (
        <div
          className={`upload-box ${isDragging ? "dragging" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <FontAwesomeIcon icon={faCloudUploadAlt} size="3x" className="upload-icon" />
          <h2>Drag & drop images, videos, or any file</h2>
          <input type="file" id="file" onChange={handleFileChange} hidden />
          <label htmlFor="file" className="file-label">Choose File</label>
          {file && <p>{file.name}</p>}
          <button className="upload-button" onClick={handleUpload} disabled={!file}>
            <FontAwesomeIcon icon={faCloudUploadAlt} /> Upload
          </button>
        </div>
      )}
      {uploaded && (
        <div className="success-box">
          <FontAwesomeIcon icon={faCheckCircle} size="3x" className="success-icon" />
          <h2>File successfully uploaded!</h2>
          <button className="exit-button" onClick={handleExit}>
            <FontAwesomeIcon icon={faTimesCircle} /> Exit
          </button>
        </div>
      )}
    </div>
  );
};

