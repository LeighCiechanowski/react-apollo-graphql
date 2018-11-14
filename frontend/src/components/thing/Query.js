import React from 'react';
import { Query } from 'react-apollo';

import Thing from './Thing';
import QUERY from '../../graphql/queries/thing-query';

class ThingQuery extends React.Component {
    commentCreated = (cache, { data: { createComment }}) => {
        const { thing } = cache.readQuery({ query: QUERY, variables: { id: `${this.props.match.params.id}` } });
        cache.writeQuery({
            query: QUERY,
            variables: { id: `${this.props.match.params.id}` },
            data: {
                thing: {
                    ...thing,
                    commentsCount: thing.commentsCount + 1,
                    comments: [...thing.comments, createComment]
                }
            }
        });
    };
    render() {
        return (
            <Query query={QUERY} variables={{id: this.props.match.params.id}}>
                {({ loading, error, data }) => {
                    return <Thing loading={loading} error={error} thing={data.thing} commentCreated={this.commentCreated} />;
                }}
            </Query>
             
        );
    }
}

export default ThingQuery;
