import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;        
    }


    h1, h2, h3, h4, h5, h6, p, span, a, button, input, input::placeholder, label {
        font-family: 'Inter', sans-serif;
    }

    button, a {
        cursor: pointer;
    }

    :root{
        --color-primary: #5bf6b3;
        --color-secondary: #3a9d79;

        --color-error: #fa4a05;;

        --color-white: #FFFFFF;

        --color-grey-0: #F5F5F5;
        --color-grey-100: #E0E0E0;
        --color-grey-300: #828282;
        --color-grey-600: #333333;        
    }

    .App{
        max-width: 900px;
        margin: 0 auto;
    }
`