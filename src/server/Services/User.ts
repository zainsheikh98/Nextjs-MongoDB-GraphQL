import { UserModel } from '@/server/models';
import connectDB from '@/server/DB';
import { GetUserInput } from '@/types';

const getUsers = async (filterParams: GetUserInput) => {
  try {
    const { pageNumber, pageSize, filter } = filterParams;
    await connectDB();

    let users;

    if (filter)
      users = await UserModel.aggregate([
        { $match: { $text: { $search: filter } } },
      ])
        .limit(pageSize)
        .skip(pageSize * pageNumber);
    else
      users = await UserModel.find()
        .limit(pageSize)
        .skip(pageSize * pageNumber);
    return users;
  } catch (error) {
    throw new Error((error as Error)?.message);
  }
};

export { getUsers };
