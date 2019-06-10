import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './style.scss';

class Homecards extends Component {
  state = {
    cards: [],
    loading: true
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/homecards/30/')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          cards: [...data],
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { cards } = this.state;
    // eslint-disable-next-line array-callback-return
    const cardsHtml = cards.map((item, i) => {
      const { title, photoUrls, currencySymbol, pricePerMonth } = item;
      return (
        <Row key={`homecards__${i}`} className='homecard'>
          <Col md={6} lg={4}>
            <div className='homecard__img'>
              <img src={photoUrls.homecardHidpi} alt={title} />
            </div>
          </Col>
          <Col md={6} lg={8} className='homecard__content'>
            <div className='homecard__content-wrapper'>
              <h2>{title} </h2>
              <div className='homecard__price'>
                {pricePerMonth} {currencySymbol}
              </div>
            </div>
            <div className='button__wrapper'>
              <button className='button__primary'>More details</button>
              <button className='button__secondary'>Book now!</button>
            </div>
          </Col>
        </Row>
      );
    });
    return (
      <div>
        <div className={this.state.loading ? 'd-block' : 'd-none'}>
          <div className='loader' />
        </div>
        {cardsHtml}
      </div>
    );
  }
}

export default Homecards;
