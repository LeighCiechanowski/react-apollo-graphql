import gql from 'graphql-tag';

const query = gql`
query ThingQuery($id: Int!) {
  thing(id: $id) {
      id,
      title,
      body,
      commentsCount,
      comments {
        id,
        body
      }
    }
  }
`;

export default query;
