import blogMock from '../mocks/blog.json';

const blog = {
  uri: 'blog/1',
  verb: 'GET',
  res: {
    statusCode: 200,
    responseHeaders: {
      'Content-Type': 'application/json',
    },
    responseBody: JSON.stringify(blogMock),
  },
};

export default [blog];
