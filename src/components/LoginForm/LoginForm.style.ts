import styled from 'styled-components';

export const StyledLoginForm = styled.form`
    /* Set form dimensions, margin, padding, and styling */
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 60px;
    border-radius: 10px;
    box-shadow: 0px 2px 6px ${props => props.theme.colors['subtle']};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    background: linear-gradient(135deg, ${props => props.theme.colors['subtle']}, ${props => props.theme.colors['secondary']}); /* Gradient background */

    /* Style the heading */
    h2 {
        margin-bottom: 70px;
        color: ${props => props.theme.colors['secondary']};
        font-size: ${props => props.theme.fontSizes['xl']};
        font-weight: ${props => props.theme.fontWeights['semibold']};
        text-align: center;
    }

    /* Input field container with icons */
    .input-container {
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
        margin-bottom: 30px;
    }

    /* Style the input icons */
    .input-container .icon {
        margin-right: 10px;
    }

    /* Style for input fields */
    .input-container input {
        width: 100%;
        padding: 16px;
        border: 0.8 solid ${props => props.theme.colors['subtle']};
        border-radius: 5px;
        font-size: 16px;
    }

    /* Style for the login button */
    button {
        width: 50%;
        padding: 16px;
        font-size: 18px;
        color: ${props => props.theme.colors['light']};
        background-color: ${props => props.theme.colors['primary']};
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-top: 30px;
        margin-bottom: 30px;

        /* Change button color on hover */
        &:hover {
            background-color: ${props => props.theme.colors['secondary']};
        }
    }

    /* Container for sign up and forgot password links */
    .links {
        font-size: ${props => props.theme.fontSizes['default']};
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: 50px;
        width: 100%;
        text-align: center;

        /* Style the links */
        a {
            text-decoration: none;
            color: ${props => props.theme.colors['subtle']};
            margin-bottom: 10px;

            /* Underline the links on hover */
            &:hover {
                text-decoration: underline;
                color: ${props => props.theme.colors['primary']};
            }
        }
    }
`;
