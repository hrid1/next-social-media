import User from "@/lib/model/user.model";
import connectDB from "../mongodb/mongoose";

export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
) => {
  try {
    await connectDB();

    const updatedUser = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          imageUrl: image_url,
          email: email_addresses[0].email_address,
          username,
        },
      },
      {
        upsert: true, // 👈 create if not exists
        new: true, // 👈 return the updated/created document
        setDefaultsOnInsert: true, // apply default values
      }
    );

    return updatedUser;
  } catch (error) {
    console.error("createOrUpdateUser error:", error);
    throw new Error("Failed to create or update user");
  }
};
// DELETE USER

export const deleteUser = async (id) => {
  try {
    await connectDB();
    await User.findByIdAndDelete({ clerkId: id });
  } catch (error) {
    console.error("deleteUser error:", error);
    throw new Error("Failed to delete user");
  }
};

// GET USER

export const getUser = async (id) => {
  try {
    await connectDB();
    const user = await User.findById({ clerkId: id });
    return user;
  } catch (error) {
    console.error("getUser error:", error);
    throw new Error("Failed to get user");
  }
};

// GET ALL USERS

export const getAllUsers = async () => {
  try {
    await connectDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.error("getAllUsers error:", error);
    throw new Error("Failed to get all users");
  }
};
