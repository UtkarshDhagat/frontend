import React from 'react';
import './UploadCard.css';
import upload from '../src/assets/upload.jpg'; 

const UploadCard = () => {
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
                <div className='TimelineDiv'></div>
                <div className='uploadbox'>
                    <form>
                        <div className='updiv'>
                            <div className='labeltextdiv'>
                                <p className='LabelText1'>Upload Reports</p>
                            </div>
                            <div className='upload-file-modal'>
                                {/* <div className='upload-icon  img'>
                                    <img src={upload}  alt='Upload Icon' />
                                </div> */}
                                <div className='LabelText upload-text'>
                                    Drag and Drop file here or  
                                    <label className='choose-file-btn'>
                                     Choose file
                                        <input type='file' name='image' accept='image/*' required style={{display: 'none'}} />
                                    </label>
                                </div>
                                </div>
                                <label className='LabelText'> Date 
                                    <input className="myInput" type="date" name="dob" required />
                                </label>
                                <label className='LabelText'> Label 
                                    <input className="myInput" type="text" name="name" required />
                                </label>
                                <label className='LabelText'> Label 
                                    <input className="myInput" type="text" name="name" required />
                                </label>
                                <label className='LabelText'> Label 
                                    <input className="myInput" type="text" name="name" required />
                                </label>
                                <div className='ModalButtonDiv'>
                                    <button className='modalbutton' type="submit">Add Report</button>
                                </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadCard;