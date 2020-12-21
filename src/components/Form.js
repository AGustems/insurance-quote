import React, {useState} from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import {yearDifference, calculateBrand, obtainPlan} from '../helper'

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = ({setSummary, setLoading}) => {
    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState(false)
    
    // State data extraction
    const {brand, year, plan} = data

    // Handle changes in the form
    const handleChange = ({target}) => {
        setData(state => ({
            ...state,
            [target.name]: target.value
        }))
    }

    // Handle Submit 
    const handleSubmit = e => {
        e.preventDefault();

        if(brand.trim() === '' || year.trim() === '' || plan.trim() === ''){
            setError(true)
            return;
        }

        setError(false)

        // Price Base
        let price = 2000;

        // Obtaining the year difference
        const difference = yearDifference(year);

        // For each year we have to substract 3%
        price -= ((difference * 3) * price) / 100;

        // American 15% || Asian 5% || European 30%
        price = calculateBrand(brand) * price;
        
        // Basic 20% || Complete 50%
        price = parseFloat(obtainPlan(plan) * price).toFixed(2);

        // Spinner Animation
        setLoading(true)
        setTimeout(() => {
            // Eliminate the spinner
            setLoading(false)
            // Total price to the main component
            setSummary({
                quote: price,
                data
            })
        }, 3000)
    }

    return (
        <form onSubmit={handleSubmit}>
            {error ? <Error>All the fields are required</Error> : null}
            <Field>
                <Label>Brand</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={handleChange}
                >
                    <option value="">{`>-- Select --<`}</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asian">Asian</option>
                </Select>
            </Field>

            <Field>
                <Label>Year</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={handleChange}
                >
                    <option value="">{`>-- Select --<`}</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>

            <Field>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basic"
                    checked= {plan === "basic"}
                    onChange={handleChange}
                /> Basic
                <InputRadio
                    type="radio"
                    name="plan"
                    value="complete"
                    checked= {plan === "complete"}
                    onChange={handleChange}
                /> Complete
            </Field>

            <Button type="submit">Quote</Button>
        </form>
    )
}

Form.propTypes = {
    setSummary: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired
}

export default Form
