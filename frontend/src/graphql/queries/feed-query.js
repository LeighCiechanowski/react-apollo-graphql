import gql from 'graphql-tag';

const query = gql`
query FeedQuery {
  things {
      id,
      title,
      headline,
      body,
      commentsCount
    }
  }
`;

export default query;
