import React from 'react'
import { useState } from 'react';
import AddPostModal from '../AddPostModal';
import "./style.css"

const Post = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div className="post">
            <button  onClick={openModal}>Créer un poste</button>
            <AddPostModal isOpen={modalIsOpen} onRequestClose={closeModal} />
        </div>
    )
};
export default Post;
  