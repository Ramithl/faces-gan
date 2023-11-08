import * as React from 'react';
import './Elements.css';
import test_image from '../img/test.jpg'




function ImagePlaceholder() {
    
    return (
        <div class="img-container">
            <img src={test_image} alt="A Face"/>
        </div>
    );
}

export default ImagePlaceholder;
