import styled from 'styled-components'

export const DescriptionStyle = styled.div`
    width: 80%;
    min-width: 320px;
    margin-top: 15px; 

    background-color: #FFF3E4;
    color: #505050;

    display: flex;
    flex-direction: column;
    align-items: space-between;

    box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.2);
    > h1{
        color: #505050;
        
        padding-left: 9%;

        align-self: flex-start;
    }
    p{
        font-size: 16px;
        font-weight: 600;
    }
    main{
        span{
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 20px;

            background-color: transparent;
            border: none;

            width: 80%;
            height: 45px;

            margin: 0 auto;
            section{
                display: flex;
                gap: 6px;
            }
            aside{
                display: flex;
                align-items: center;
                gap: 6px;
                font-weight: 300;
            }
            div{
                display: flex;
                align-items: center;
                gap: 6px;

                font-weight: 300;
                i{
                    color: #FF8206;
                }
            }
        }
    }
    hr{
        background-color: #FFAC5890;
        border: 0;

        height: 3px;
        width: 90%;

        margin: 0 auto;
    }
    @media(max-width: 1020px){
        main{
            font-size: 15px;
        }
    }
`

export const HeaderStyle = styled.header`
    width: 87%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 15px 3% 25px 10%;
    i{
        color: #FF8206;
        font-size: 20px;
    }
`

export const FooterStyle = styled.footer`
    width: 80%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto; 

    div{
        h1{
            color: #505050;
            font-size: 20px;

            margin: 15px 0 10px 0;
        }
        p{
            color: #FF8206;

            margin-bottom: 15px;
        }
    }
    @media(max-width: 1200px){
        width: 95%;
    }
`