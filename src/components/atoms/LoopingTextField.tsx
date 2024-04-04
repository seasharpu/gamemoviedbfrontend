import React, { useRef, useEffect } from 'react';
import { BodyText } from './BodyText';

export const LoopingTextField = ({ input, text_color, size, styling }:
    {
        input: string | null,
        text_color: string,
        size: string,
        styling: string,
    }
    ) => {
    const textRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    //console.log(textRef);

    useEffect(() => {


    }, [input]);

    // Use a separate useEffect for logging refs after the component has rendered
    useEffect(() => {
        const container = containerRef.current;
        const text = textRef.current;


            //Calculate duration based on text length and container width
            const duration = (text!.offsetWidth + container!.offsetWidth) / 50; // Adjust the division factor for desired speed

            console.log(duration);
            
            const keyframes = [
                { transform: 'translateX(0%)' },
                { transform: `translateX(-${text!.offsetWidth}px)` },
                { transform: 'translateX(0%)' }
            ];

            const options = {
                duration: duration,
                iterations: Infinity,
                easing: 'linear'
            };

            const animation = text!.animate(keyframes, options);
            console.log("textRef:", textRef.current);
            console.log("containerRef:", containerRef.current);
            return () => {
                animation.cancel();
            };

    }, [textRef, containerRef]);

    if (!textRef.current){
        return (
            <div ref={containerRef} className=''>
                <span ref={textRef} className={` text-${text_color}`} >{input}</span>
            </div>
        );
    }else {
        return (
            <div className="flex flex-col items-center overflow-hidden relative" ref={containerRef} >
                <BodyText text={input} text_color={text_color} size={size} styling={`absolute whitespace-nowrap origin-left ${styling}`} ref={textRef}></BodyText>
            </div>
        );
    }
};

//<BodyText text={input} text_color={text_color} size={size} styling={`absolute whitespace-nowrap origin-left ${styling}`}></BodyText>