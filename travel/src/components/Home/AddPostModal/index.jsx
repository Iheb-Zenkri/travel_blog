import React, { useState } from 'react';
import Modal from 'react-modal';
import "./style.css";

Modal.setAppElement('#root');

const AddPostModal = ({ isOpen, onRequestClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    authorName: '',
    createdAt: '',
    price: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
        ...formData,
        [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    try {
        const response = await fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
          onRequestClose()
          window.location.reload();
        }else {
            console.error('Error creating post');
        }
    } catch (error) {
        console.error('Error creating post:', error);
    }
};

  const fields = [
    { id: 'title', label: 'Type de Voyage', type: 'text', required: true },
    { id: 'category', label: 'Destination', type: 'text', required: true },
    { id: 'description', label: 'Description', type: 'textarea', required: true },
    { id: 'authorName', label: "Votre Nom", type: 'text', required: true },
    { id: 'createdAt', label: 'Date de Voyage', type: 'date', required: true },
    { id: 'price', label: 'Dépenses', type: 'text', required: true },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add New Post"
      className="modal"
      overlayClassName="overlay"
      shouldCloseOnOverlayClick={false}
    >
      <div className="modal-header">
        <h2>Nouvelle Poste</h2>
        <button className="close-button" onClick={onRequestClose}>×</button>
      </div>

      <form onSubmit={handleSubmit}>
        {fields.map(({ id, label, type, required }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            {type === 'textarea' ? (
              <textarea
                id={id}
                value={formData[id]}
                onChange={handleChange}
                required={required}
              />
            ) : (
              <input
                id={id}
                type={type}
                value={formData[id]}
                onChange={handleChange}
                required={required}
              />
            )}
          </div>
        ))}
        <button className='submit_button' type="submit">Ajouter</button>
      </form>
    </Modal>
  );
};

export default AddPostModal;
