export const reduceText = (text: string) => {
    if (text.length > 33) {
        const newtext = text.substring(0, 32);
        return newtext + "...";
    } else {
        return text;
    }
};
