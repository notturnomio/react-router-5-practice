import React, { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

function QuoteDetail() {
  const match = useRouteMatch();
  const params = useParams();
  console.log(params.quoteId);

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered">{error}</div>;
  }

  if (!loadedQuote.esp) {
    return (
      <>
        <h2>No quote found.</h2>
        <Link className="btn" to="/quotes">
          Return
        </Link>
      </>
    );
  }

  return (
    <>
      <HighlightedQuote {...loadedQuote} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
}

export default QuoteDetail;
