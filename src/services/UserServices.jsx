import { createUser, login, getUserData } from "@api/UserAPIsReqs";
import Cookies from "js-cookie";

export async function CreateUserRequest(userData) {
  try {
    const { status } = await createUser(userData);
    if (status === 201) {
      return { Created: true };
    }
  } catch (error) {
    return { Created: false, error };
  }
}

export async function LoginUserRequest(userData) {
  try {
    const { status, data } = await login(userData);
    if (status === 200) {
      Cookies.set("token", data.Token);
      return { LoggedIn: true };
    }
  } catch (error) {
    return { LoggedIn: false, error };
  }
}

export async function GetUserDataRequest() {
  try {
    const token = Cookies.get("token");
    const { status, data } = await getUserData(token);
    if (status === 200) {
      return { UserData: data.User };
    }
  } catch (error) {
    return { UserData: false, error };
  }
}
