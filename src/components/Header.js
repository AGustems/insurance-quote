import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ContainerHeader = styled.header`
    background-color: #25C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const HeaderText = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({title}) => {
    return (
        <ContainerHeader>
            <HeaderText>{title}</HeaderText>
        </ContainerHeader>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
