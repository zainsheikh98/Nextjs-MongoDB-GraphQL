import { gql } from '@apollo/client';

const GET_USERS = gql`
  query getUser($data: GetUserInput!) {
    users(input: $data) {
      name
      email
      companyName
      url
      phone
    }
  }
`;

export { GET_USERS };
