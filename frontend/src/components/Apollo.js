import React from "react";
import PropTypes from "prop-types";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "http://localhost:3005"
  });

const Apollo = ({children}) => {
    return(
      <ApolloProvider client={client}>
    <div>{ children }</div>
    </ApolloProvider>
    )
}

Apollo.propTypes = {
  children: PropTypes.element
};

export default Apollo;
