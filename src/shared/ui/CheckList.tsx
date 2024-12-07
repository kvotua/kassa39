import React, { useState } from 'react';
import { CashierPanel, Avatar, CashierName, CheckContainer, ItemList, Item, TotalContainer, Button, EmptyList} from './CheckList.scss'
import { DragDropContext, Droppable, Draggable, DroppableProvided, DraggableProvided, DropResult } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';
import Lottie from 'lottie-react';
import EmpryCart from '../../assets/EmptyCart.json';
import Mark from '../../assets/icon-mark.png'
import DefaultAvatar from '../../assets/DefaultAvatar.png'

const CheckList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleRemoveFromCart = (itemId: number) => {
        dispatch(removeFromCart(itemId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const [items, setItems] = useState([
        { id: 1, name: 'Товар 1', quantity: '2 кг', price: '200 руб', marked: true },
        { id: 2, name: 'Товар 2', quantity: '1 л', price: '150 руб', marked: false },
        { id: 3, name: 'Товар 3', quantity: '500 г', price: '100 руб', marked: true },
    ]);

    const totalPrice = items.reduce((total, item) => total + parseFloat(item.price.replace(' руб', '')), 0);

    const handleOnDragEnd = (result: DropResult) => {
        if (!result.destination) return;
 
        const updatedItems = Array.from(items);
        const [removed] = updatedItems.splice(result.source.index, 1); 
        updatedItems.splice(result.destination.index, 0, removed);
 
        setItems(updatedItems);
    };

    return (
        <CheckContainer>
            <CashierPanel>
                <Avatar src={DefaultAvatar} />
                <CashierName>Иванов Иван Иванович</CashierName>
            </CashierPanel>
            {cartItems.length === 0 ? (
                <EmptyList>
                    <Lottie animationData={EmpryCart} style={{ width: '50%', height: 'auto' }} loop={true} />
                </EmptyList>
            ) : (
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="items">
                    {(provided: DroppableProvided) => (
                        <ItemList {...provided.droppableProps} ref={provided.innerRef}>
                            {cartItems.map((item, index) => (
                                <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                                    {(provided: DraggableProvided) => (
                                        <Item ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            <div>
                                                {item.name} - {item.quantity} 
                                            </div>
                                            {item.mark && <img src={Mark} alt="Маркировка" />}
                                            <div>{item.price}</div>
                                        </Item>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </ItemList>
                    )}
                </Droppable>
            </DragDropContext>
            )}
            <TotalContainer>
                <div>Итого: {totalPrice} руб</div>
                <Button>Провести чек</Button>
            </TotalContainer>
        </CheckContainer>
    );
};

export default CheckList;