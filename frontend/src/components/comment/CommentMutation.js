import React from 'react';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';

import AddThingForm from '../AddThingForm';
import CREATE_COMMENT from '../../graphql/mutations/create-comment-mutation';

class CommentMutation extends React.Component {
    submitComment = (createComment) => (comment) => {
        const { thingId } = this.props;
        createComment({ variables: { thingId, body: comment } });
    }

    render() {
        return (
            <Mutation mutation={CREATE_COMMENT} update={this.props.onUpdate}>
                {(createComment, { loading }) => (
                    <AddThingForm onSubmit={this.submitComment(createComment)} loading={loading} />
                )}
            </Mutation>
        );
    }
}

CommentMutation.propTypes = {
    thingId: PropTypes.number,
    onUpdate: PropTypes.func
};

export default CommentMutation;
