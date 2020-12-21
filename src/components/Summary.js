import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import {capitalizeFirst} from '../helper';

const SummaryContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`

const Summary = ({summary}) => {
    const {brand, year, plan} = summary.data

    return (
        <SummaryContainer>
            <h2>Summary of the Insurance Quote</h2>
            <ul>
                <li>Brand: {capitalizeFirst(brand)}</li>
                <li>Year: {year}</li>
                <li>Plan: {capitalizeFirst(plan)}</li>
            </ul>
        </SummaryContainer>
    )
}

Summary.propTypes = {
    summary: PropTypes.object.isRequired,
}

export default Summary
