import { getUsers } from '@/server/Services';
import { GetUserInput } from '@/types';

const resolvers = {
  Query: {
    users: async (_: undefined, { input }: { input: GetUserInput }) => {
      try {
        const users = await getUsers(input);
        if (!users?.length) return [];
        return users;
      } catch (error) {
        throw new Error((error as Error)?.message);
      }
    },
  },
};

export default resolvers;
