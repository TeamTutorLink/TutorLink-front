import React from 'react';
import Select from 'react-select';

const TagOptions = () => {
  const options = [
    { value: '수학', label: '수학' },
    { value: '영어', label: '영어' },
    { value: '국어', label: '국어' },
    { value: '과학', label: '과학' },
    { value: '사회', label: '사회' },
    { value: '한국사', label: '한국사' },
  ];

  return (
    <div>
      <Select closeMenuOnSelect={false} isMulti options={options} />
    </div>
  );
};

export default TagOptions;
