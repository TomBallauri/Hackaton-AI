import React from 'react';
import { BikeComponent } from '../../pages/types';

interface ComponentSelectorProps {
  availableComponents: BikeComponent[];
  onDragStart: (component: BikeComponent) => void;
  onDragEnd: () => void;
}

const ComponentSelector: React.FC<ComponentSelectorProps> = ({ 
  availableComponents, 
  onDragStart,
  onDragEnd
}) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, component: BikeComponent) => {
    // Set drag data (required for Firefox)
    e.dataTransfer.setData('application/json', JSON.stringify({ id: component.id }));
    
    // Change the drag ghost image to be smaller
    const ghost = document.createElement('div');
    ghost.classList.add('w-12', 'h-12', 'bg-blue-500', 'rounded-full');
    ghost.innerText = component.name.substring(0, 2);
    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(ghost, 25, 25);
    
    // Set timeout to remove the ghost element
    setTimeout(() => {
      document.body.removeChild(ghost);
    }, 0);
    
    onDragStart(component);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">Composants Disponibles</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {availableComponents.map((component) => (
          <div
            key={component.id}
            className="border border-gray-200 rounded-lg p-3 cursor-grab hover:bg-blue-50 transition-colors duration-200"
            draggable
            onDragStart={(e) => handleDragStart(e, component)}
            onDragEnd={onDragEnd}
          >
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center mb-2">
                <img
                  src={`https://via.placeholder.com/64?text=${component.name}`}
                  alt={component.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-sm font-medium text-center">{component.name}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Faites glisser les composants sur le canevas pour assembler votre vélo personnalisé.
        </p>
      </div>
    </div>
  );
};

export default ComponentSelector;