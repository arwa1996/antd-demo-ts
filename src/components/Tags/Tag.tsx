import React, { useState } from 'react';
import { Select, Tag } from 'antd';
import { DefaultOptionType, LabeledValue } from 'antd/lib/select';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

type tagProps = {
  onClose?: () => void;
  tagTitle?: string;
};

export const TagGroups: React.FC<tagProps> = ({ onClose, tagTitle }) => {
  return (
    <>
      <Tag closable onClose={onClose}>
        {tagTitle}
      </Tag>
    </>
  );
};
