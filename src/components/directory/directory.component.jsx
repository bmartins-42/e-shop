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
          title: 'cards games',
          linkUrl: 'cardsgames',
          imageUrl:
            'https://www.forbiddenpower.com/wp-content/uploads/2016/08/Mtg-logo-700x560.png'
        },
        {
          id: 2,
          title: 'wars games',
          linkUrl: 'warsgames',
          imageUrl:
            'https://images.unsplash.com/photo-1529981188441-8a2e6fe30103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        },
        {
          id: 3,
          title: 'role playing games',
          linkUrl: 'rpgs',
          imageUrl:
            'https://images.unsplash.com/photo-1546070609-877c13504085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1348&q=80'
        },
        {
          id: 4,
          title: 'board games',
          linkUrl: 'boardgames',
          imageUrl:
            'https://images.unsplash.com/photo-1563941402830-3bae42b67b38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
          size: 'large'
        },
        {
          id: 5,
          title: 'video games',
          linkUrl: 'videogames',
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
        {this.state.sections.map(({ id, ...otherSectionPros }) => {
          return <MenuItem key={id} {...otherSectionPros}></MenuItem>;
        })}
      </div>
    );
  }
}

export default Directory;
