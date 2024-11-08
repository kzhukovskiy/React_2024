import React, { useState } from 'react';
import { Product } from '../types/Product.ts';
import Modal from './Modal.tsx';
import './ProductCard.css';

interface ProductCardProperties {
    product: Product;
}

const ProductCard: React.FC<ProductCardProperties> = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const imageSrc = product.imageURL || "https://avatars.mds.yandex.net/i?id=b9b921ac2dbc73fffebb5f5289b215ff070c29b1-12803022-images-thumbs&n=13";

    return (
        <div className="product-card" onClick={openModal}>
            <img src={imageSrc} alt={product.name} className="product-image" />
            <div className="product-details">
                <strong className="product-name">{product.name}</strong>
                <p className="product-description">
                    {product.description ? (product.description.length > 150
                        ? product.description.substring(0, 150) + '...'
                        : product.description) : ""}
                </p>
                <p className="product-category">Категория: {product.category}</p>
                <p className="product-quantity">
                    Количество: {product.quantity} {product.unit}
                </p>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} product={product} />
        </div>
    );
};

export default ProductCard;