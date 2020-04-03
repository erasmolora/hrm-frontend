import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";


const QUERY = gql`query { currentUser{ firstName } }`;


export default function TopBarWelcome() {
    const { loading, error, data } = useQuery(QUERY);

    if (loading) return null;
    if (error) return `Error!: ${error}`;

    return (
        <span className="kt-header__topbar-username kt-visible-desktop">{data.currentUser.firstName}</span>
    );
}