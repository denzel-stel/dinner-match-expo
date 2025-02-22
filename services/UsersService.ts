import { createUser, getUserByStych } from "@/controllers/users";
import { User } from "@stytch/react-native";

class UsersService {
  
    async persistStytchUserLocally(stytchUser: User): Promise<void>  {
        const response = await getUserByStych(stytchUser.user_id);
        console.log(response);
        if (response.status === 200) return;
        createUser({
          email: stytchUser.emails[0].email,
          stytch_uuid: stytchUser.user_id,
          username: stytchUser.name.first_name,
          first_name: stytchUser.name.first_name,
          last_name: stytchUser.name.last_name,
          password: stytchUser.password?.password_id || ""
        })
    }
}

export default new UsersService();