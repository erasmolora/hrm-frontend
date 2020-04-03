import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";


const QUERY = gql`query { currentUser{ firstName } }`;


export default function UserCardSkinLight() {
    const { loading, error, data } = useQuery(QUERY);

    if (loading) return null;
    if (error) return `Error!: ${error}`;

    return (
        <div className="kt-user-card kt-user-card--skin-light kt-notification-item-padding-x">
            <div className="kt-user-card__avatar">
                <img className="kt-hidden-" alt="Pic" src="./assets/media/users/300_25.jpg" />
                <span className="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold kt-hidden">S</span>
            </div>
            <div className="kt-user-card__name">{ data.currentUser.firstName }</div>
            <div className="kt-user-card__badge">
                <span className="btn btn-label-primary btn-sm btn-bold btn-font-md">Company Name</span>
            </div>
        </div>
    );
}