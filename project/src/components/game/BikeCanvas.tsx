import React, { useRef, useState, useEffect } from 'react';
import { BikeComponent } from '../../pages/types';

interface BikeCanvasProps {
  selectedComponents: BikeComponent[];
  onDropComponent: (component: BikeComponent, x: number, y: number) => void;
  currentDrag: BikeComponent | null;
}

const BikeCanvas: React.FC<BikeCanvasProps> = ({ 
  selectedComponents, 
  onDropComponent,
  currentDrag 
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 0, height: 0 });
  
  // Update canvas dimensions when the window resizes
  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        setCanvasDimensions({
          width: canvasRef.current.offsetWidth,
          height: canvasRef.current.offsetHeight
        });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Handle drop on the canvas
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    if (currentDrag && canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      onDropComponent(currentDrag, x, y);
    }
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div 
      ref={canvasRef}
      className="bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 h-[500px] relative overflow-hidden"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {/* Basic bike frame outline as background */}
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 800 500" 
        className="absolute top-0 left-0 w-full h-full opacity-10"
      >
        <path 
          d="M200,350 L350,200 L500,200 L650,350 L500,350 L350,200 Z" 
          stroke="#000" 
          strokeWidth="10" 
          fill="none" 
        />
        <circle cx="200" cy="350" r="80" stroke="#000" strokeWidth="10" fill="none" />
        <circle cx="650" cy="350" r="80" stroke="#000" strokeWidth="10" fill="none" />
      </svg>
      
      {/* Placed components */}
      {selectedComponents.map((component) => (
        component.position && (
          <div
            key={component.id}
            className="absolute cursor-move transform-gpu transition-transform duration-200 hover:scale-105"
            style={{
              left: `${component.position.x}%`,
              top: `${component.position.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            draggable
          >
            <div className="p-2 bg-white rounded-lg shadow-md">
              <p className="text-xs font-medium text-center mb-1">{component.name}</p>
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={`https://via.placeholder.com/64?text=${component.name}`}
                  alt={component.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        )
      ))}
      
      {selectedComponents.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500 text-center px-4">
            Faites glisser les composants ici pour assembler votre vélo
          </p>
        </div>
      )}
    </div>
  );
};

export default BikeCanvas;