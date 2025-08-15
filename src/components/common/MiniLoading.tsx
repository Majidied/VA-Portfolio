import React from 'react';
import { motion } from 'framer-motion';

interface MiniLoadingProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  className?: string;
}

const MiniLoading: React.FC<MiniLoadingProps> = ({
  size = 'md',
  color = 'primary',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const colorClasses = {
    primary: 'border-blue-400 border-r-purple-400',
    secondary: 'border-gray-400 border-r-gray-600',
    white: 'border-white/50 border-r-white',
  };

  return (
    <motion.div
      className={`
        ${sizeClasses[size]} 
        border-2 border-transparent rounded-full
        ${colorClasses[color]}
        ${className}
      `}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default MiniLoading;
