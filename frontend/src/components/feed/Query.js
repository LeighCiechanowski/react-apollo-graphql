import React from 'react';
import { Query } from 'react-apollo';

import Feed from './Feed';
import QUERY from '../../graphql/queries/feed-query';

class FeedQuery extends React.Component {
    render() {
        return (
            <Query query={QUERY}>
                {({ loading, error, data, fetchMore }) => {
                    return <Feed loading={loading} error={error} things={data.things} fetchMore={fetchMore} />;
                }}
            </Query>
             
        );
    }
}

export default FeedQuery;
