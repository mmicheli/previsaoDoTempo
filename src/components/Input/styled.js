import styled from "styled-components"

export const InputStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 40%;

    margin: ${props => props.descriptionActive ? '15px' : '100px'} auto 0 auto;
    h1{
        font-size: ${props => props.descriptionActive ? '50px' : '65px'};
        text-align: start;
    }
    span{
        width: 80%;  
        height: 60px;
        min-width: 280px;

        margin-top: 30px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        border: 1px solid #DC7000;
        border-radius: 2px;

        background-color: #FFFFFF;

        padding: 0 30px 0 0;
        input{
            width: 95%;

            padding: 10px 20px;

            font-size: 20px;
        }
        i{
            color: #6B6B6B;

            font-size: 20px;
        }
    }
    > hr{
        border: none;
        background: white;

        margin: 20px 0;
        text-align: center;
        
        height: 1px;
        width: 60vw;
    }
    @media(max-width: 1090px) {

        span{
            input{
            font-size: 17px;
            }
        }
    }
    @media(max-width: 970px) {
        h1{
            font-size: 40px;
        }
        span{
            input{
            font-size: 14px;
            }
        }
    }
    @media(max-width: 475px){
        hr{
            width: 100vw;
        }
    }
`