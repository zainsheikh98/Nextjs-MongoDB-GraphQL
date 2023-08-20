import { UserModel } from '@/server/models';
import connectDB from '@/server/DB';
import { GetUserInput } from '@/types';

const getUsers = async (filterParams: GetUserInput) => {
  try {
    const { pageNumber, pageSize, filter } = filterParams;
    await connectDB();

    const searchableFields = ['companyName', 'name', 'email', 'phone'];
    const regex = new RegExp(`\\b${filter}\\b`, 'i');

    let users;
    if (filter)
      users = await UserModel.find({
        $or: searchableFields.map((field) => ({
          [field]: { $regex: regex },
        })),
      })
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
