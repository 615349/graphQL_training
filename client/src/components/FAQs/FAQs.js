import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Select from 'react-select';
import PageWrapper from '../../components/PageWrapper/index';
import './faqs.scss';

function buildFAQURL(faq) {
  return faq.title.toLowerCase().replace(/ /g, '-').replace(/[?=]/g, '');
}

function getMatchedFAQ(faqs, { hash }) {
  if (!hash && (!faqs || !faqs.length)) { return null; }

  const id = hash ? hash.replace('#', '') : buildFAQURL(faqs[0]);

  return faqs.find(faq => buildFAQURL(faq) === id);
}

export default class FAQs extends Component {

  state = {
    selectedFaq: getMatchedFAQ(this.props.data.faqs, this.props.location),
    dropdownQuestions: this.props.data.faqs.map(faq => ({ label: faq.title, value: faq })),
  };

  renderFAQQuestions({ small } = {}) {
    const { selectedFaq, dropdownQuestions } = this.state;
    const { data: { faqs } } = this.props;

    if (small) {
      return (
        <Select
          className="faqs__questions-dropdown"
          value={selectedFaq && { label: selectedFaq.title, value: selectedFaq }}
          onChange={({ value }) => { this.setState({ selectedFaq: value }); }}
          options={dropdownQuestions}
        />
      );
    }

    return (
      <div className="faqs__questions">
        {
          faqs.map((faq) => {
            if (selectedFaq && selectedFaq.id === faq.id) {
              return <p key={faq.id}>{faq.title}</p>;
            }

            return (
              <Link
                onClick={() => { this.setState({ selectedFaq: faq }); }}
                key={faq.id}
                to={`faqs#${buildFAQURL(faq)}`}
              >
                {faq.title}
              </Link>
            );
          })
        }
      </div>
    );
  }

  renderFAQContent() {
    const { selectedFaq } = this.state;

    if (!selectedFaq) {
      return <p>{'We can\'t seem to find that FAQ question'}</p>;
    }

    return (
      <div className="faqs__content">
        <MediaQuery minWidth={640}>
          <h2 className="faqs__content__title">{selectedFaq.title}</h2>
        </MediaQuery>
        <p>{selectedFaq.body}</p>
      </div>
    );
  }

  render() {
    return (
      <PageWrapper title="FAQs">
        <div className="faqs">
          <MediaQuery maxWidth={639}>
            {this.renderFAQQuestions({ small: true })}
          </MediaQuery>
          {this.renderFAQContent()}
          <MediaQuery minWidth={640}>
            {this.renderFAQQuestions()}
          </MediaQuery>
        </div>
      </PageWrapper>
    );
  }
}

FAQs.propTypes = {
  data: PropTypes.shape({
    faqs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
    })),
  }).isRequired,
  location: PropTypes.shape({ hash: PropTypes.string }).isRequired,
};
