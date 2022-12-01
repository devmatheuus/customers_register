import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        height: 100%;
        font-size: 62.5%;
    }

    body{   
        height: 100%;
        font-size: 1.4rem;
        font-family: 'Inter';
    

        button {
            cursor: pointer;
            outline: none;
        }
 
       input {
            outline: none
        }
        
        ol, li {
            list-style-type: none;
        }
        
        a{
            text-decoration: none;
        }
    }
`;
