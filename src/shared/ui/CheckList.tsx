import React, { useState, useEffect } from 'react';
import { CashierPanel, Avatar, CashierName, CheckContainer, ItemList, Item, TotalContainer, Button, EmptyList} from './CheckList.scss'
import { DragDropContext, Droppable, Draggable, DroppableProvided, DraggableProvided, DropResult } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, reorderCartItems } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';
import Lottie from 'lottie-react';
import EmpryCart from '../../assets/EmptyCart.json';
import Mark from '../../assets/icon-mark.png'
import DefaultAvatar from '../../assets/DefaultAvatar.png'

const CheckList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    // const handleRemoveFromCart = (itemId: number) => {
    //     dispatch(removeFromCart(itemId));
    // };

    // const handleClearCart = () => {
    //     dispatch(clearCart());
    // };


    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newTotalPrice = cartItems.reduce((total, item) => total + item.price, 0);
        setTotalPrice(newTotalPrice);
    }, [cartItems]);

    const handleOnDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const updatedItems = Array.from(cartItems);
        const [removed] = updatedItems.splice(result.source.index, 1);
        updatedItems.splice(result.destination.index, 0, removed);

        dispatch(reorderCartItems(updatedItems));
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
                                                {item.name} - {item.quantity} {item.unit}
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