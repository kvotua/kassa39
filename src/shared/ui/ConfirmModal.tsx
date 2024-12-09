interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    itemName: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, itemName }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Товар уже существует</h2>
                <p>Товар "{itemName}" уже добавлен в корзину. Вы хотите увеличить количество или добавить новую позицию?</p>
                <button onClick={onConfirm}>Увеличить количество</button>
                <button onClick={onClose}>Добавить новую позицию</button>
                <button onClick={onClose}>Отмена</button>
            </div>
        </div>
    );
};

export default ConfirmationModal;
