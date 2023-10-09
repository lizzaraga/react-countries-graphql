import { gql } from 'graphql-tag'

export const GET_COUNTRIES_QUERY = gql`
query GetCountries {
  countries{
    code
    emoji
    name
    capital
  }
}

`

export const GET_COUNTRY_BY_CODE_QUERY = gql`
query GetCountryByCode($code: ID!) {
  country(code: $code){
    name
    native
    emoji
    currency
    languages{
      code
      name
    }
  }
}

`
