/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ListCard = (props) => {
  const {
    label,
    fieldType,
    action,
  } = props;
  return (
    <div className="flex justify-between bg-grey-100 w-full rounded shadow my-2">
      <div className="flex flex-col py-2 px-4">
        <div className="text-dark-700 font-semibold text-xl">
          {label}
        </div>
        <div className="text-gray-600 font-light text-sm">
          Type: {fieldType}
        </div>
      </div>
      <button type="button" onClick={action} className="px-4">
        <FontAwesomeIcon 
          className="items-center justify-center h-full text-dark-900 hover:text-red-600"
          icon={faTrashAlt}
          size="2x"
        />
      </button>
    </div>
  );
};

ListCard.defaultProps = {
  label: 'label',
  fieldType: 'field type',
  action: () => {},
};

export default ListCard;
