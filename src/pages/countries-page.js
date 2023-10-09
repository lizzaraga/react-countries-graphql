import React from 'react';
import { useQuery } from "@apollo/client"
import { GET_COUNTRIES_QUERY } from "../operations/queries"
import { QueryResult } from "../components/query-result"
import { Link } from "react-router-dom"
import { CountryItem } from '../components/countryItem';


export const CountriesPage = () => {
  const { error, loading, data } = useQuery(GET_COUNTRIES_QUERY)
  return (
    <>
      <br/>
      <br/>
      <div className="container mx-auto">
        <h3>List of countries</h3>
        <hr/>
        <QueryResult error={error} loading={loading} data={data}>
          <div class="country-group">
            {data?.countries.map(country => (
              <CountryItem {...country} to={`/country/${country.code}`}></CountryItem>
            ))}
          </div>
        </QueryResult>
      </div>
    </>
  )
}
