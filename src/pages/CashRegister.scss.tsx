import styled, { keyframes }  from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    background: linear-gradient(to bottom right, #737dfe, #ffcac9);
`;

export const CheckComponent = styled.div`
    flex: 0 0 25%;
    border-radius: 20px;
    margin-right: 20px;

    &:last-child {
        margin-right: 0;
    }
    box-shadow: 0.15em 0.5em 2em rgba(0, 0, 0, 0.25);

    @media (max-width: 900px) {
        display: none;
    }
`;

export const CenterComponent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    border-radius: 20px; 
    margin-right: 20px;

    @media (max-width: 900px) {
        margin-right: unset;
        width: 80vw;
    }
`;

export const MenuComponent = styled.div`
    width: auto;
    height: 50px;
    border-radius: 20px;
    margin-bottom: 10px;
    display: flex; 
    gap: 10px;
`;

export const Button = styled.button`
    flex-grow: 1;
    padding: 10px 20px;
    border: none;
    border-radius: 15px;
    background-color: #6a3b88;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    font-family: "Nunito", sans-serif;
    transition: background-color 0.3s;

    &:hover {
        background-color: #a04e9e;
    }
`;

export const ButtonImg = styled.button`
    flex-grow: 1;
    display: flex;
    min-width: 20%;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 15px;
    background-color: #6a3b88;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        img {
            transform: scale(1.1); 
        }
    }

    img {
        max-width: 100%;
        height: 80%; 
        transition: transform 0.3s; 
    }
`;

export const ProductComponent = styled.div`
    flex-grow: 1; 
    border-radius: 20px;
    box-shadow: 0.15em 0.8em 2em rgba(0, 0, 0, 0.25);
`;

export const CartButton = styled.button`
    position: fixed; 
    bottom: 20px;
    right: 20px;
    background-color: #f5cf0f;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transition: transform 0.3s ease;

    img {
        width: 40px;
        height: auto;
    }

    &:active {
        transform: scale(0.95); 
    }

    @media (min-width: 900px) {
        display: none;
    }
`;


export const Sidebar = styled.div<{ isOpen: boolean; isClosing: boolean; }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 75%;
    z-index: 50;
    height: 100%;
    background-color: white;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    animation: ${props => (props.isOpen ? fadeIn : fadeOut)} 0.3s forwards;
    visibility: ${props => (props.isOpen || props.isClosing ? 'visible' : 'hidden')};
    @media (min-width: 900px) {
        display: none;
    }

`;

export const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 0.85;
        transform: translateX(0);
    }
`;

export const fadeOut = keyframes`
    from {
        opacity: 0.85;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(-100%);
    }
`;

export const BackgroundBlur = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    z-index: 10;
    display: flex;
    filter: ${props => (props.isOpen ? 'blur(5px)' : 'none')};
    auto: ${props => (props.isOpen ? 'auto' : 'none')};
    transition: filter 0.3s ease;
`;