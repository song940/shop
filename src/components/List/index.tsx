import React from 'react';

import './index.css';

type ListType = {
  className?: string,
  children?: any,
};

export const List = ({ className, children }: ListType) => {
  return (
    <ul className={ `list ${className}` }>{children}</ul>
  );
};

type ListItemType = {
  className?: string,
  children?: any,
};

export const Item = ({ className, children, ...props }: ListItemType) => {
  return (
    <li className={ `list-item ${className}` } {...props} >{children}</li>
  );
};

List.Item = Item;

export default List;