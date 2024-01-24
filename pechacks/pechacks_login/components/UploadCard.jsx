import React from 'react';
import './UploadCard.css'


const UploadCard = () => {
    return (
        <div>
            <h1>Add your Files</h1>
            <label htmlFor="file-upload" className="custom-file-upload">
                 Upload File
            </label>
            <input id="file-upload" type="file"/>
            <form>
                <div className="form-row">
                    <div className="input-data">
                        <input type="text" name="medicalRecordNumber" required />
                        <div className="underline"></div>
                        <label>Medical Record Number</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data">
                        <input type="date" name="dateOfBirth" required />
                        <div className="underline"></div>
                        <label>Date of Birth</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-data">
                        <input type="text" name="sex" required />
                        <div className="underline"></div>
                        <label>Sex</label>
                    </div>
                </div>
                <button type="submit" className="Button-data">Submit</button>
            </form>
        </div>
    );
};

export default UploadCard;