import {
    StytchClient,
  StytchProvider,

  useStytchUser,
} from "@stytch/react-native";
import { Text } from "react-native";
export const scheme = "stytchrnexample://";

function App() {
  const publicToken = process.env.STYTCH_PUBLIC_TOKEN ?? "";
  const stytch = new StytchClient(publicToken);

  return (
    <StytchProvider stytch={stytch}>
      <Nav />
    </StytchProvider>
  );
}

function Nav() {
  const user = useStytchUser();
    console.log(user, "user!")
  return (
    <Text>
        {user.user ? "Logged in" : "Not logged in"}
    </Text>
  );
}

export default App;
