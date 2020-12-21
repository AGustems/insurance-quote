import React from 'react'
import styled from '@emotion/styled'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import PropTypes from 'prop-types'

const Message = styled.p`
    background-color: rgba(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`

const QuoteContainer = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`

const QuoteText = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`

const Result = ({summary}) => {
    return (
        (!summary.quote ? 
            <Message>Choose a brand, year and type of insurance</Message> : 
            (
                <QuoteContainer>
                    <TransitionGroup
                        component="span"
                        className="result"
                    >
                        <CSSTransition
                            classNames="result"
                            key={summary.quote}
                            timeout={{enter: 500, exit: 500}}
                        >
                            <QuoteText>The total amount is: $ <span>{summary.quote}</span></QuoteText>
                        </CSSTransition>
                    </TransitionGroup>
                </QuoteContainer>
            ))
    )
}

Result.propTypes = {
    summary: PropTypes.object.isRequired,
}

export default Result
