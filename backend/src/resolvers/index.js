import ThingQuery from './thing/thing-query';
import ThingMap from './thing/thing-map';
import CommentMutation from './comment/comment-mutation';

export default {
  Query: {
    ...ThingQuery,
  },
  Mutation: {
    ...CommentMutation,
  },
  Thing: ThingMap,
};
