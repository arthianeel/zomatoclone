import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';

const src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHyderabadi_biryani&psig=AOvVaw3l4taE24uUklSvS6jDurjf&ust=1622998142494000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDTlrD5gPECFQAAAAAdAAAAABAD';

class Photo extends Component {
  static propTypes = {
    color: PropTypes.string,
  }

  state = { activeItem: 'All Photos' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div>
            <Menu color={'red'} key={'red'} widths={3}>
                <Menu.Item name='All Photos' active={activeItem === 'All Photos'} onClick={this.handleItemClick} />
                <Menu.Item name='Food' active={activeItem === 'Food'} onClick={this.handleItemClick} />
                <Menu.Item name='Ambience' active={activeItem === 'Ambience'} onClick={this.handleItemClick} />
            </Menu>
            <Image.Group size='small'>
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
            </Image.Group>
        </div>
    )
  }
}
export default Photo;