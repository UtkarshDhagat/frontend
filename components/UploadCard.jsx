import React, { useState } from 'react';
import './UploadCard.css';
import TimelineCard from './Timelinecard.jsx';

const UploadCard = () => {
    const [timelineData, setTimelineData] = useState([]);
    const [formData, setFormData] = useState({
        label1: '',
        label2: '',
        label3: '',
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
            label1: '',
            label2: '',
            label3: '',
            fileUploaded: false
        });
    };

    return (
        <div className='Parent'>
            <div className='DetailsDiv'>
                <div className='buttondiv'>
                    <button type='button' className='Button'>+</button>   
                    <button type='button' className='Button2'>S</button>  
                    <button type='button' className='Button1'>?</button>  
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
                                <label className='LabelTextupload'> Label1 
                                    <input className="myInput1" type="text" name="label1" value={formData.label1} onChange={handleInputChange} required />
                                </label>
                                <label className='LabelTextupload'> Label2 
                                    <input className="myInput1" type="text" name="label2" value={formData.label2} onChange={handleInputChange} required />
                                </label>
                                <label className='LabelTextupload'> Label3
                                    <input className="myInput1" type="text" name="label3" value={formData.label3} onChange={handleInputChange} required />
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