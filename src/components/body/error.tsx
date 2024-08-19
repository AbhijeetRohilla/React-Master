import React from 'react'
import { useRouteError } from 'react-router-dom';

function ErrorComp() {
    const err=useRouteError();
    console.log(err)
  return (
    <>
    <h1>OOPS!</h1>
    <h3>Something Went Wrong...</h3>
    <h4>{err.error.message}: <strong>status Code {err.status}</strong></h4>
    </>
  )
}

export default ErrorComp;