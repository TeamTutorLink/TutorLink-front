import React from 'react';
import Select from 'react-select';

const AuthOptions = () => {
  const options = [
    {
      value: '요소를 추가하고 삭제할 수 있어요',
      label: '요소를 추가하고 삭제할 수 있어요',
    },
    {
      value: '요소를 추가할 순 있지만, 삭제할 수는 없어요',
      label: '요소를 추가할 순 있지만, 삭제할 수는 없어요',
    },
    { value: '요소를 편집할 수 없어요', label: '요소를 편집할 수 없어요' },
  ];

  return (
    <div>
      <Select options={options} />
    </div>
  );
};

export default AuthOptions;
