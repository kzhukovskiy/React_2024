import React from 'react';
import './Modal.css';
import { Product } from '../types/Product.ts';

interface ModalPropertiess {
    isOpen: boolean;
    onClose: () => void;
    product: Product;
}

const Modal: React.FC<ModalPropertiess> = ({ isOpen, onClose, product }) => {
    if (!isOpen) {
        return null;
    }

    const imageSrc = product.imageURL || "https://avatars.mds.yandex.net/i?id=b9b921ac2dbc73fffebb5f5289b215ff070c29b1-12803022-images-thumbs&n=13";

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-onclose" onClick={onClose}>
                    X
                </button>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Категория: {product.category}</p>
                <p>Количество: {product.quantity} {product.unit}</p>
                <img src={imageSrc} alt={product.name} />
            </div>
        </div>
    );
};

export default Modal;