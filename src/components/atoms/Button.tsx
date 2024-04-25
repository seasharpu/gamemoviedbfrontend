import React from 'react';

const Button = ({ textInput, textSize, textColor, boxWidth, boxHeight, boxColor }: {
    textInput: string;
    textSize: string;
    textColor: string;
    boxWidth: string;
    boxHeight: string;
    boxColor: string;
}) => {
    return (
        <div className={`${boxColor} flex items-center justify-center ${boxWidth} ${boxHeight}`}>
            <p className={`${textColor} ${textSize} `}>{textInput}</p>
        </div>

    );
}

export default Button;
