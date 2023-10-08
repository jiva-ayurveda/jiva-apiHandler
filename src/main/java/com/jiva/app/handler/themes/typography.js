/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */

function pxToRem(value) {
    return `${value / 16}rem`;
}

function responsiveFontSizes({ sm, md, lg }) {
    return {
        "@media (min-width:600px)": {
            fontSize: pxToRem(sm),
        },
        "@media (min-width:900px)": {
            fontSize: pxToRem(md),
        },
        "@media (min-width:1200px)": {
            fontSize: pxToRem(lg),
        },
    };
}

export default function themeTypography(theme) {
    return {
        fontFamily: "Roboto, sans-serif",
        h1: {
            fontWeight: 700,
            lineHeight: 80 / 64,
            fontSize: pxToRem(40),
            color: theme.colors.grey800,
            ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
        },
        h2: {
            fontWeight: 700,
            lineHeight: 64 / 48,
            fontSize: pxToRem(32),
            color: theme.colors.grey800,
            ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
        },
        h3: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: pxToRem(24),
            color: theme.colors.grey800,
            ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
        },
        h4: {
            fontWeight: 700,
            fontSize: pxToRem(20),
            color: theme.colors.grey800,
            ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
        },
        h5: {
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: pxToRem(18),
            color: theme.colors.grey700,
            ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
        },
        h6: {
            fontWeight: 700,
            lineHeight: 28 / 18,
            fontSize: pxToRem(17),
            color: theme.colors.grey700,
            ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
        },
        subtitle1: {
            fontWeight: 500,
            lineHeight: 1.5,
            fontSize: pxToRem(16),
        },
        subtitle2: {
            lineHeight: 22 / 14,
            fontSize: pxToRem(15),
        },
        body1: {
            lineHeight: 1.5,
            fontSize: pxToRem(15),
        },
        body2: {
            lineHeight: 22 / 14,
            fontSize: pxToRem(14.5),
            color: theme.colors.grey600,
        },
        button: {
            textTransform: "inherit",
        },
        mainContent: {
            backgroundColor: theme.background,
            width: "100%",
            minHeight: "calc(100vh - 88px)",
            flexGrow: 1,
            marginTop: "88px",
            borderRadius: `12px`,
        },
        menuCaption: {
            fontSize: "0.875rem",
            fontWeight: 500,
            color: theme.heading,
            padding: "6px",
            textTransform: "capitalize",
            marginTop: "10px",
        },
        subMenuCaption: {
            fontSize: "0.6875rem",
            fontWeight: 500,
            color: theme.darkTextSecondary,
            textTransform: "capitalize",
        },
    };
}
