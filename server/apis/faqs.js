const MOCK_FAQ_DATA = require('../data/faqs');

function getFaqs() {
  // We'd probably do a database lookup or further requests here to gather data
  return MOCK_FAQ_DATA;
}

module.exports = {
  // We could also add an endpoint for getting single FAQs by ID, but for simplicity it's just
  // easier to get all FAQs every time.
  faqs: getFaqs
};
