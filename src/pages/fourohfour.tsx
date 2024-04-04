export const BodyText = ({ text, text_color, size, styling }: 
    { 
        text: string, 
        text_color: string,
        size: string,
        styling: string
    }) => {

    let converted_size = ""

    switch (size) {
        case "large":
            converted_size = "text-lg lg:text-2xl xl:text-4xl";
            break;
        case "normal":
            converted_size = "text-base lg:text-lg xl:text-2xl";
            break;
        case "small":
            converted_size = "text-sm lg:text-base xl:text-xl";
            break;
        default:
            converted_size = "text-base lg:text-lg xl:text-2xl";
            break;
        }

    const inline_styling = `text-${text_color} ${converted_size} ${styling}`;
    
    return (
        <p className={`${inline_styling}`}>{text}</p>
    );
}