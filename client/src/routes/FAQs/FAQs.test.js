import React from 'react';
import FAQs from './FAQs';

const MOCK_FAQS = {
  faqs: [
    { id: 1, title: 'foobar', content: 'My faq answer' },
    { id: 2, title: 'foobar2', content: 'My faq answer 2' },
  ],
};

function renderFAQs(props = {}) {
  const faqs = shallow(
    <FAQs data={MOCK_FAQS} location={{}} {...props} />,
  );

  expect(faqs.find('.faqs')).toExist();

  return faqs;
}

describe('routes/FAQs/components/FAQs', () => {

  test('should load the first faq from the list if there\'s none selected in the URL', () => {
    const faqs = renderFAQs();

    expect(faqs.state().selectedFaq).toEqual(MOCK_FAQS.faqs[0]);
  });

  test('should load the correct FAQ from the list when one is selected in the URL', () => {
    const faqs = renderFAQs({ location: { hash: '#foobar2' } });

    expect(faqs.state().selectedFaq).toEqual(MOCK_FAQS.faqs[1]);
  });

  test('should display a message if there is no matching faq for the url', () => {
    const faqs = renderFAQs({ location: { hash: '#ergergeth' } });

    expect(faqs.state().selectedFaq).toBeFalsy();
    expect(faqs.find('p')).toExist();
    expect(faqs.find('p').text()).toEqual('We can\'t seem to find that FAQ question');
  });

  test('should be able to change faq from the dropdown', () => {
    const faqs = renderFAQs();
    const dropdown = faqs.find('.faqs__questions-dropdown');

    expect(dropdown).toExist();

    dropdown.props().onChange({ value: MOCK_FAQS.faqs[1] });

    expect(faqs.state().selectedFaq).toEqual(MOCK_FAQS.faqs[1]);
  });

  test('should be able to select an faq in the list', () => {
    const faqs = renderFAQs();
    const faqList = faqs.find('.faqs__questions');

    expect(faqList).toExist();

    const link = faqList.find('Link');

    expect(link).toExist();
    expect(link.props().to).toEqual('faqs#foobar2');

    // One of them is a static <p> so there should only be 1 link
    expect(link.length).toBe(1);

    link.simulate('click');

    expect(faqs.state().selectedFaq).toEqual(MOCK_FAQS.faqs[1]);
  });
});
