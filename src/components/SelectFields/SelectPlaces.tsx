import React, { useState } from 'react';
import { Select, Tag } from 'antd';
import { DefaultOptionType, LabeledValue } from 'antd/lib/select';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

type selectProps = {
  onSearch?: (value: string) => void;
  onChange?: (value: string) => void;
  onSelect?: (value: string) => void;
  placeholder?: string;
  options?: string[];
};

export const SelectPlaces: React.FC<selectProps> = ({
  onSearch,
  onChange,
  onSelect,
  options,
  placeholder,
}) => {
  const { Option } = Select;
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const filteredOptions = options?.filter((o) => !selectedItems.includes(o));
  let showTag = true;
  return (
    <Select
      showSearch
      style={{ width: '100%', borderRadius: '1rem' }}
      size='large'
      placeholder={placeholder}
      optionFilterProp='children'
      value={selectedItems}
      onChange={setSelectedItems}
      onSelect={(value: string) => {
        if (onSelect) onSelect(value);
      }}
      mode='multiple'
      onSearch={onSearch}
      filterOption={(input, option) =>
        (option!.children as unknown as string)
          .toLowerCase()
          .includes(input.toLowerCase())
      }
    >
      {filteredOptions?.map((option) => (
        <Option value={option}>{option}</Option>
      ))}
    </Select>
  );
};
