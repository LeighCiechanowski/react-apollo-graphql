import commentsMock from '../mocks/comments.json';

const blog = {
  uri: 'comments/1',
  verb: 'GET',
  res: {
    statusCode: 200,
    responseHeaders: {
      'Content-Type': 'application/json',
    },
    responseBody: JSON.stringify(commentsMock),
  },
};

export default [blog];
