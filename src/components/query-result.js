import React from 'react';

export const QueryResult = ({error, loading, data, children}) => {
  if(error){
    return (
      <div className="d-flex justify-content-center align-items-center ">
        <p className="text-danger">An error occurs, we can't load the data !</p>
      </div>
    )
  }
  if(loading){
    return (
      <div className="d-flex justify-content-center align-items-center ">
        <p className="text-black ">Loading ! ...</p>
      </div>
    )
  }
  if(!data){
    return (
      <div className="d-flex justify-content-center align-items-center ">
        <p className="text-black ">Nothing to show ...</p>
      </div>
    )
  }
  else return children
}
