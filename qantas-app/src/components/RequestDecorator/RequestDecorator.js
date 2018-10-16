import React from 'react';
import { Query } from 'react-apollo';
import swal from 'sweetalert2';
import Loading from '../Loading';

export default function RequestDecorator(Decorated, query) {
  return () => (
    <Query query={query}>
      {({ loading, error, data }) => {
        if (loading) { return <Loading />; }
        if (error) {
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Try reloading the page.',
          });

          return null;
        }

        return <Decorated data={data} />;
      }}
    </Query>
  );
}
