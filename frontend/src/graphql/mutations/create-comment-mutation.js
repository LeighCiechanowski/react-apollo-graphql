import gql from 'graphql-tag';

const mutation = gql`
mutation($thingId: Int!, $body: String!) {
    createComment(thingId: $thingId, body: $body) {
        id,
        body
    }
}
`;

export default mutation;
