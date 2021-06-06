import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Menu, Image, Table } from 'semantic-ui-react';
import style from './restaurant-list.css';


const src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHyderabadi_biryani&psig=AOvVaw3l4taE24uUklSvS6jDurjf&ust=1622998142494000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDTlrD5gPECFQAAAAAdAAAAABAD';


class Rating extends Component {
  render() {
    return (
        <div>
            <Table fixed>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell style={{ background: 'white', fontSize: '24px', fontWeight: 'bold', borderBottom: '0px'}}>What People love here</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                        <h2 class="mb5" tabindex="0" role="heading" aria-label="Phone number">Food</h2>
                            <span class="tel left res-tel">
                                <span style={{ fontSize: '14px'}}>
                                    <span tabindex="0" aria-label="080 60600001" class="tel">Dosa, Mocktails, Pasta, Fish Grill, Bbq, Noodles, Gulab Jamun</span>
                                </span><br />       
                            </span>
                        </Table.Cell>
                        <Table.Cell>
                        <h2 class="mb5" tabindex="0" role="heading" aria-label="Phone number">Service</h2>
                            <span class="tel left res-tel">
                                <span style={{ fontSize: '14px'}}>
                                    <span tabindex="0" aria-label="080 60600001" class="tel">Courteous Staff, Friendly Staff, Prompt Service</span>
                                </span><br />       
                            </span>
                        </Table.Cell>
                        <Table.Cell>
                        <h2 class="mb5" tabindex="0" role="heading" aria-label="Phone number">Ambience</h2>
                            <span class="tel left res-tel">
                                <span style={{ fontSize: '14px'}}>
                                    <span tabindex="0" aria-label="080 60600001" class="tel">Live Music</span>
                                </span><br />       
                            </span>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
  }
}
export default Rating; 