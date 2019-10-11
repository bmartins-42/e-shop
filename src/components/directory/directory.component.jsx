import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          id: 1,
          title: 'Cards Games',
          imageUrl:
            'https://www.forbiddenpower.com/wp-content/uploads/2016/08/Mtg-logo-700x560.png'
        },
        {
          id: 2,
          title: 'War Games',
          imageUrl:
            'https://images.unsplash.com/photo-1529981188441-8a2e6fe30103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          id: 3,
          title: 'Role Playing Games',
          imageUrl:
            'https://images.unsplash.com/photo-1546070609-877c13504085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1348&q=80'
        },
        {
          id: 4,
          title: 'Boardgames',
          imageUrl:
            'https://images.unsplash.com/photo-1563941402830-3bae42b67b38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          size: 'large'
        },
        {
          id: 5,
          title: 'Video Games',
          imageUrl:
            'https://images.unsplash.com/photo-1539716947714-3295e1074d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          size: 'large'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, title, imageUrl, size }) => {
          return (
            <MenuItem
              id={id}
              title={title}
              imageUrl={imageUrl}
              size={size}
            ></MenuItem>
          );
        })}
      </div>
    );
  }
}

export default Directory;
