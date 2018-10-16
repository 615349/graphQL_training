import gql from 'graphql-tag';
import { withRouter } from 'react-router-dom';
import makesRequest from '../../../components/RequestDecorator';
import FAQs from '../components/FAQs';

const QUERY = gql`
    {
        faqs {
            id
            title
            body
        }
    }
`;

const routedFAQs = withRouter(FAQs);

export default makesRequest(routedFAQs, QUERY);
