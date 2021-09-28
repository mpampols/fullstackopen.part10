
import { useMutation } from "@apollo/client";
import { AUTHORIZE } from "../graphql/mutations";

export const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    return mutate({ variables: { username, password } });
  };

  return [signIn, result];
};

