import styled from 'styled-components'

export const CapitaisStyle = styled.div`
    width: 31%;
    min-width: 260px;

    margin: 0 auto;
    h1{
        color: white;

        text-align: start;
    }
    span{
        display: flex;
        align-items: center;
        justify-content: space-between;

        color: #2E2920;
        font-weight: 300;

        width: 70%;
        
        margin: 20px 0 10px 0;
    }
    section{
        width: 31.5vw;
        height: 166px;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        div{
            display: flex;
            align-items: center;
            gap: 7px;

            font-weight: 600;
            margin-bottom: 10px;
        }
    }
    @media(max-width: 1200px){
        span{
            font-size: 13.5px;
        }
        section{
            height: 144px;
            font-size: 13.5px;
        }
    }
    @media(max-width: 1050px){
        .hidden{
            display: none;
        }
        section{
            height: auto;
            gap: 10px;
            width: 100%;
        }
    }
`