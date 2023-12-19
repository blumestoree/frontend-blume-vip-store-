'use client';

import Select from 'react-select';

export default function SelectComponent() {
  const options: { value: string; label: string }[] = [
    { label: 'Mais recentes', value: 'Mais recentes' },
    { label: 'Menor preço', value: 'Menor preço' },
    { label: 'Maior preço', value: 'Maior preço' },
  ];

  return (
    <Select className='w-[200px]' defaultValue={options[0]} options={options} />
  );
}
