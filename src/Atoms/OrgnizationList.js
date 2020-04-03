import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";
import { Link, useRouteMatch } from 'react-router-dom';

export const ORGANIZATION_QUERY = gql`query { organizations{ name, id } }`;

export default function OrganiztionList() {
    const { loading, error, data } = useQuery(ORGANIZATION_QUERY);
    let { url } = useRouteMatch();

    if (loading) return (
        <div className="row">
            <div className="col-sm">
                <div className="kt-spinner kt-spinner--lg kt-spinner--dark"></div>
            </div>
        </div>
    );
    if (error) return `'Error!: ${error}`;

    const links = data.organizations.map((organization) => (
        <Link to={`${url}/${organization.id}`} className="kt-notification-v2__item" key={organization.id}>
            <div className="kt-notification-v2__item-icon">
                <i className="flaticon-bell kt-font-success"></i>
            </div>
            <div className="kt-notification-v2__itek-wrapper">
                <div className="kt-notification-v2__item-title">{organization.name}</div>
                <div className="kt-notification-v2__item-desc">Reports based on sales</div>
            </div>
        </Link>
        )
    )

    return links;
}