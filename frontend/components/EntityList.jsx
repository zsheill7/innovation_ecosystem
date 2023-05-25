import React from 'react';

const houseIcon = '/images/house_icon.png'; // Use the correct path to the house icon

const EntityList = ({ entities, onEntityClick }) => {
  const handleImageError = (e) => {
    e.target.src = houseIcon;
  };

  return (
    <div className="entity-list">
      {entities.map((entity) => (
        <div
          key={entity.Label}
          className="entity-item"
          onClick={() => onEntityClick(entity)}
        >
          <img
            src={entity.Image || houseIcon}
            alt={entity.Label}
            className="entity-image"
            onError={handleImageError}
          />
          <span>{entity.Label}</span>
        </div>
      ))}
    </div>
  );
};

export default EntityList;