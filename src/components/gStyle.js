import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

            body {
                background: rgb(107,112,92);
                background: ${({theme}) => theme.backgroundColorGradient};
                background-attachment: fixed;
                color: ${({theme}) => theme.text};
            }

            .todo-title {
                color:${({theme}) => theme.title};
            }

            .theme-toggle {
                stroke:rgba(0,0,0,0);
                fill: ${({theme}) => theme.toggle};
                opacity: .6;
            }

            .card-create-input::placeholder {
                color: ${({theme}) => theme.placeholderText};
            }


            .card-text{
                color: ${({theme}) => theme.cardText};
                opacity: .8;
            }

            .card-bg {
                background-color: ${({theme}) => theme.cardBG};
            }

            .svg {
            fill: ${({theme}) => theme.icon};
            }

            .svg-icon{
                stroke:rgba(0,0,0,0);
                fill: ${({theme}) => theme.icon};
                opacity: .8;
            }

            .card-stats {
                color: ${({theme}) => theme.cardStats};
            }
            
`