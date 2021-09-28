import { gql } from '@apollo/client';

export const AUTHORIZE = gql`
  mutation {
    authorize(credentials: { username: "kalle", password: "password" }) {
      accessToken
    }
  }
`;