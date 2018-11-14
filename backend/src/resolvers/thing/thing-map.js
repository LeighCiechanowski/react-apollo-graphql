import { getComments, getCommentsCount } from '../../connectors/comments';

export default {
  comments: async ({ id }) => {
    return await getComments(id);
  },
  commentsCount: async ({ id }) => {
    return await getCommentsCount(id, 'thing');
  },
};
