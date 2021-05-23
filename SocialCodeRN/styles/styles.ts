const fontStyles = {
    FontFamilyEM: 'Lato',
};

const androidFont = {
    regular: {
        fontFamily: `${fontStyles.FontFamilyEM}-Regular`,
    },
    light: {
        fontFamily: `${fontStyles.FontFamilyEM}-Light`,
    },
    bold: {
        fontFamily: `${fontStyles.FontFamilyEM}-Bold`,
    },
    thin: {
        fontFamily: `${fontStyles.FontFamilyEM}-Thin`,
    },
};
const iOSFont = {
    regular: {
        fontFamily: `${fontStyles.FontFamilyEM}-Regular`,
    },
};

const size = {
    xs: {
        fontSize: 14,
        lineHeight: 14,
    },
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
        lineHeight: 45,
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
