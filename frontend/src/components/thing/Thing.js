import React from 'react';
import { Link } from 'react-router-dom';
import { Timeline } from 'antd';
import CommentMutation from '../comment/CommentMutation';
import PropTypes from 'prop-types';

const Thing = ({thing, loading, commentCreated}) => {
    if (loading) {
        return <div>LOADING</div>;
    }
  return (
    <div>
      <h4>{thing.title}</h4>
      <p>{thing.body}</p>
      {thing.commentsCount > 0 && 
      <p>{thing.commentsCount}</p>
      }
      <Timeline reverse={true}>
        { thing.comments.map(comment => {
            return <Timeline.Item key={comment.id}>{comment.body}</Timeline.Item>
        })}
      </Timeline>
      <CommentMutation thingId={thing.id} onUpdate={commentCreated} />

      <Link to="/"> Go back to homepage </Link>
    </div>
  );
};

Thing.propTypes = {
  thing: PropTypes.object,
  loading: PropTypes.bool,
  commentCreated: PropTypes.func
};

export default Thing;
