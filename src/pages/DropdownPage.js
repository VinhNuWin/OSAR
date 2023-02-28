import { useState } from 'react';
import Dropdown from '../components/Dropdown';
import { useSelector } from 'react-redux';

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const { fName, index } = useSelector((state) => {
    return {
      fName: state.form.fName,
      index: state.index.index,
    }
  });

  console.log(fName, index);

  const options = [
    { label: 'Instagram', value: {fName} },
    { label: 'Facebook', value: 'Facebook' },
    { label: 'Tinder', value: 'Tinder' },
  ];
    

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default DropdownPage;
