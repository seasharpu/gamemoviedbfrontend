export const Button = (textInput: string, textSize: string, textColor: string, boxWidth: string, boxHeight: string, boxColor: string) => {

    return (
        <p className={`bg-${boxColor} text-${textColor} text-[${textSize} text-center w-[${boxWidth}] h-[${boxHeight}}`}>{textInput}</p>
    );
}

export default Button;