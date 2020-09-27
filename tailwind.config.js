module.exports = {
    prefix: '',
    important: false,
    separator: ':',
    theme: {
        extend: {
            colors: {
                primary: {
                    default: "var(--theme-primary)",
                    hover: "var(--theme-primary-hover)"
                },
                white: "var(--theme-white)",
                light: {
                    default: "var(--theme-light)",
                    hover: "var(--theme-light-hover)"
                },
                dark: "var(--theme-dark)",
                black: "var(--theme-black)",
            }
        },
        typography: (theme) => ({
            default: {
                css: {
                    color: theme("colors.black"),
                    maxWidth: "intial",
                    a: {
                        color: theme("colors.primary.default"),
                        "&:hover": {
                            color: theme("colors.primary.hover")
                        }
                    },
                    strong: {
                        color: "inherit"
                    },
                    h1: {
                        color: "inherit",
                        fontWeight: '700'
                    },
                    h2: {
                        color: "inherit",
                        fontWeight: '600'
                    },
                    h3: {
                        color: "inherit",
                        fontWeight: '500'
                    },
                    h4: {
                        color: "inherit",
                        fontWeight: '400'
                    },
                    code: {
                        color: theme("colors.dark")
                    },
                    "code::before": {
                        content: "",
                    },
                    "code::after": {
                        content: ""
                    },
                    pre: {
                        color: null,
                        backgroundColor: null
                    }
                }
            }
        })
    },
    variants: {},
    plugins: [
        require("@tailwindcss/typography")
    ]
  }