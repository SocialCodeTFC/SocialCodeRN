const fontStyles = {
    FontFamilyEM: 'Lato Sans',
};

const androidFont = {
    regular: {
        fontFamily: `${fontStyles.FontFamilyEM}-Regular`,
    },
};
const iOSFont = {
    regular: {
        fontFamily: `${fontStyles.FontFamilyEM}-Regular`,
    },
};

const size = {
    small: {
        fontSize: 14,
        lineHeight: 24,
    },
    default: {
        fontSize: 20,
        lineHeight: 25,
    },
    large: {
        fontSize: 25,
        lineHeight: 35,
    },
    xl: {
        fontSize: 25,
        lineHeight: 50,
    },
    title: {
        fontSize: 40,
        lineHeight: 50,
    },
};

export const textStylesEM = {
    font: androidFont,
    size,
};
