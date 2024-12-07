import styled from 'styled-components';

export const CheckContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
`;

export const CashierPanel = styled.div`
    display: flex;
    align-items: center; 
    padding: 10px;
    background-color: #f0f0f0;
    margin-bottom: 10px; /* Отступ снизу */
`;

export const Avatar = styled.img`
    width: 40px; 
    height: 40px; 
    border-radius: 50%;
    margin-right: 10px;
`;

export const CashierName = styled.div`
    font-weight: bold; /* Жирный текст для ФИО */
    font-size: 16px; /* Размер шрифта */
`;

export const ItemList = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

export const EmptyList = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 10px;

    img{
        display: flex;
        width: 20px;
        height: auto;
    }
    box-shadow: 0.15em 0.25em 1em rgba(0, 0, 0, 0.25);
`;

export const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #f0f0f0;
`;

export const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #6a3b88;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
        background-color: #a04e9e;
    }
`;
