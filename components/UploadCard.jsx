import React, { useState } from 'react';
import './UploadCard.css';
import TimelineCard from './Timelinecard.jsx';

const UploadCard = () => {
    const [timelineData, setTimelineData] = useState([]);
    const [formData, setFormData] = useState({
        date: '',
        description: '',
        fileUploaded: false
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleFileChange = (event) => {
        setFormData({
            ...formData,
            fileUploaded: !!event.target.files[0]
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setTimelineData([...timelineData, formData]);
        setFormData({
            date: '',
            description: '',
            fileUploaded: false
        });
    };

    return (
        <div className='Parent1'>
            <div className='DetailsDiv'>
                <div className='buttondiv'>
                    <button type='button' className='Button111'>+</button>   
                    <button type='button' className='Button21'>S</button>  
                    <button type='button' className='Button11'>?</button>  
                </div> 
            </div>
            <div className='Parentdiv2'>
           
                <div className='TimelineDiv'>
                <div className='TimelineCard'>
                    {timelineData.sort((a, b) => new Date(a.date) - new Date(b.date)).map((data, index) => (
                        <TimelineCard key={index} data={data} />
                    ))}
                </div>
            </div>    
                <div className='uploadbox'>
                    <form onSubmit={handleFormSubmit}>
                        <div className='updiv'>
                            <div className='labeltextdiv'>
                                <p className='LabelText1'>Upload Reports</p>
                            </div>
                            <div className='upload-file-modal'>
                                <label className='LabelTextupload'> File
                                    <input className="myInput1" type="file"  onChange={handleFileChange} />
                                </label>
                                <label className='LabelTextupload'> Date
                                    <input className="myInput1" type="date" name="date" value={formData.date} onChange={handleInputChange} required />
                                </label>
                                <label className='LabelTextupload'> Ehr Labels 
                                    <input className="myInput1" type="text" name="label1" value={formData.EhrLabels} onChange={handleInputChange} required />
                                </label>
                                <label className='LabelTextupload'> description 
                                    <input className="myInput1" type="text" name="description" value={formData.description} onChange={handleInputChange} required />
                                </label>
                                <label className='LabelTextupload'> Labels
                                    <input className="myInput1" type="text" name="label3" value={formData.Labels} onChange={handleInputChange} required />
                                </label>
                                
                                <div className='ModalButtonDiv'>
                                    <button className='modalbutton' type="submit">Add Report</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadCard;