import { makeExecutableSchema } from 'graphql-tools';

import RootQuery from './root_query.graphql';
import resolvers from '../resolvers';
import Thing from './thing';
import Comment from './comment'

export default makeExecutableSchema({
  typeDefs: [RootQuery, Thing, Comment],
  resolvers,
});
