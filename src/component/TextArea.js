
import React, { useState } from 'react';

export default function Textarea(props) {
    const [text,textchange] = useState('스케줄');
    const textChange = (e)=>{textchange(e.target.value)}

    return(
        
        <textarea id="story" name="story"
          rows="5"  value={text} onChange={textChange} />
            
    )
}