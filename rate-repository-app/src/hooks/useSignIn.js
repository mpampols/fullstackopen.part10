
import { useMutation } from "@apollo/client";
import { AUTHORIZE } from "../graphql/mutations";

import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from "@apollo/client";

export const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({ variables: { username, password } });
    await authStorage.setAccessToken(data.authorize.accessToken);
    client.resetStore();
    return data;
  };

  return [signIn, result];
};

