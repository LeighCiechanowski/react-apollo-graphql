import { getThing, getThings } from '../../connectors/thing';

export default {
  things: async () => {
    return await getThings();
  },
  thing: async (_, { id }) => {
    return await getThing(id);
  },
};
