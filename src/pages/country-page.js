import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_COUNTRY_BY_CODE_QUERY } from "../operations/queries";
import { QueryResult } from "../components/query-result";

export function CountryPage() {

  const { code } = useParams()
  const { error, loading, data } = useQuery(GET_COUNTRY_BY_CODE_QUERY, {
    variables: { code }
  })
  return (
    <>
      <br />
      <br />
      <QueryResult error={error} loading={loading} data={data}>
        <div className="container mx-auto d-flex flex-column ">
          <Link to={'/countries'}>Go back</Link>
          <h3 className="mt-4">{data?.country.name} </h3>
          <hr />
          <p className="d-flex flex-column justify-content-center align-items-center ">
            <span style={{ fontSize: "10rem" }} className="text-center">{data?.country.emoji}</span>
            <span className="text-primary" style={{ marginTop: "-2rem" }}><i>{data?.country.native}</i> </span>
          </p>

        </div>
        <br />
        <div className="container d-flex flex-column align-align-items-center justify-content-center ">
        <div className="row">
            <span className="col-6 text-end fw-medium ">Native name :</span>
            <span className="col-6">{data?.country.native}</span>
          </div>
          <div className="row">
            <span className="col-6 text-end fw-medium ">Currency :</span>
            <span className="col-6">{data?.country.currency}</span>
          </div>
          <div className="row">
            <span className="col-6 text-end fw-medium ">Languages :</span>
            <span className="col-6">{data?.country.languages.map(item => item.name).join(',')}</span>
          </div>
        </div>
      </QueryResult>

    </>
  )
}
