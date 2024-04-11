import React, { useEffect, useState } from 'react';
import { BodyText } from './BodyText';
import { v4 as uuidv4 } from 'uuid';

export const LoopingTextField = ({ input, text_color, size, styling }:
    {
        input: string | null,
        text_color: string,
        size: string,
        styling: string,
    }
) => {

    const [isTextWide, setIsTextWide] = useState(false);
    const slide_id = uuidv4();

    // Use a separate useEffect for logging refs after the component has rendered
    useEffect(() => {

        let container = document.getElementById(`container_slide${slide_id}`);
        let text = document.getElementById(`text_slide${slide_id}`);

        let container_width = container!.offsetWidth;
        let text_width = text!.offsetWidth;

        //only when text block is bigger than container, it will animate
        if (text_width >= container_width) {
            console.log("input:" + input);
            console.log("text: " + text);
            
            setIsTextWide(true);

            //Calculate duration based on text length and container width
            const duration = (text_width + container_width) / 0.05; // Adjust the division factor for desired speed

            let transformlength = text!.offsetWidth - container!.offsetWidth

            const keyframes = [
                { transform: 'translateX(0%)' },
                { transform: 'translateX(0%)' },
                { transform: `translateX(-${transformlength}px)` },
                { transform: `translateX(-${transformlength}px)` },                
                { transform: 'translateX(0%)' }
            ];

            const options = {
                duration: duration,
                iterations: Infinity,
                easing: 'linear'
            };

            const animation = text!.animate(keyframes, options);
            return () => {
                animation.cancel();
            };

        }else {
            setIsTextWide(false);
        }
        console.log(isTextWide);
        
    }, [input]); // []

    return (
        <div id={`container_slide${slide_id}`} className={`flex flex-col ${isTextWide ? 'items-start' : 'items-center'} overflow-hidden w-full relative`}>
            <BodyText id={`text_slide${slide_id}`} text={input} text_color={text_color} size={size} styling={`text-nowrap text-lg lg:text-2xl xl:text-4xl ${styling}`}></BodyText>
        </div>
    );
};