import styled from 'styled-components';

export const CategoryList = styled.div`
    display: block;
    line-height: 3;
    justify-content: left;
    margin: 10px 20px 0 20px;

    -ms-overflow-style: -ms-autohiding-scrollbar; 

    overflow-x: auto; 

    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar {
        width: 0px;
    }
    @media (max-width: 900px) {
        display: flex;
        white-space: nowrap;
        margin: 20px 0 0 0;

        
    }
`;

export const CategoryButton = styled.button`
    background-color: #6a3b88;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 15px;
    cursor: pointer;
    margin-right: 5px;
    transition: background-color 0.3s;
    @media (max-width: 900px) {
        &:first-child {
            margin-left: 20px;
        }
        &:last-child {
            margin-right: 20px;
        }
    }
  
    &:hover {
        background-color: #a04e9e;
    }
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;
    padding: 20px;

    @media (max-width: 900px) {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        overflow: scroll;
    }
`;

export const ProductCard = styled.div`
    background-color: #f5f5f5; 
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px; 
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: transform 0.2s ease;

    &:active {
        transform: scale(0.95); 
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 90%;
    animation: fadeIn 0.3s ease;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    h2 {
        margin: 0 0 20px;
        font-size: 24px;
        color: #333;
    }

    label {
        display: block;
        margin-bottom: 15px;
        font-weight: bold;
    }

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
        font-size: 16px;
        outline: none;

        // &:focus {
        //     border-color: #007bff; 
        //     box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); 
        // }
    }

    button {
        background-color: #6a3b88;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
        margin-right: 10px;

        &:hover {
            background-color: #a04e9e;
        }
    }

    .close-button {
        background-color: transparent;
        color: #333;
        border: 1px solid #ccc;
        transition: background-color 0.3s;

        &:hover {
            background-color: #f1f1f1;
        }
    }
`; 


export const ProductName = styled.h3`
    font-size: 18px;
    margin: 0;
`;

export const ProductUnit = styled.p`
    font-size: 14px; 
    color: #666;
`;

export const ProductPrice = styled.p`
    font-size: 16px; 
    font-weight: bold;
    color: #000;
`;
