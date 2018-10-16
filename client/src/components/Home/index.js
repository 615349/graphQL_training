import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-foundation';
import MediaQuery from 'react-responsive';
import HERO_IMAGE from '../../assets/images/hero.jpg';
import { SUBTITLE } from '../../constants/';
import './home.scss';

export default function Home({ history }) {
  return (
    <Fragment>
      <div className="home" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="home__content">
          <MediaQuery maxWidth={639}>
            <img alt="hero-min" src={HERO_IMAGE} />
          </MediaQuery>
          <h3>{SUBTITLE}</h3>
          <Button onClick={() => history.push('/faqs')}>Learn More</Button>
        </div>
      </div>
    </Fragment>

  );
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
