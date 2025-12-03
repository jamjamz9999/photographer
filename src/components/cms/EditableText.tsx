
import React, { useState, useEffect } from 'react';
import { useContent } from './ContentContext';
import { SiteContent } from '../../types';

interface EditableTextProps {
  section: keyof SiteContent;
  contentKey: string;
  className?: string;
  multiline?: boolean;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

const EditableText: React.FC<EditableTextProps> = ({ 
  section, 
  contentKey, 
  className = '', 
  multiline = false,
  tag: Tag = 'div'
}) => {
  const { content, updateContent, isEditMode } = useContent();
  
  // Safely access the content
  const sectionData = content[section] as any;
  const initialValue = sectionData ? sectionData[contentKey] : '';
  
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    updateContent(section, contentKey, value);
  };

  if (isEditMode) {
    const inputClasses = `bg-yellow-50/50 border-2 border-yellow-400 border-dashed p-1 rounded w-full hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all ${className}`;
    
    if (multiline) {
      return (
        <textarea
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClasses}
          rows={5}
        />
      );
    }
    
    return (
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={inputClasses}
      />
    );
  }

  return (
    <Tag className={className} dangerouslySetInnerHTML={{ __html: value }} />
  );
};

export default EditableText;
