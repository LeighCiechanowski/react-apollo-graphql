import { createComment } from '../../connectors/comments';

export default {
  createComment: async (_, { thingId, body}) => {
    return await createComment(thingId, body);
  },
};
