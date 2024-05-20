import styled from 'styled-components';

export const StyledSupportChatbox = styled.div`
	
    .chatbox-container {
        display: flex;
        flex-direction: column;
        width: 400px; 
        height: 500px; 
        border: 1px solid #ccc;
        border-radius: 10px;
        overflow: hidden;
    }
	
    .chatbox-header {
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: ${props => props.theme.colors['primary']};
        color: ${props => props.theme.colors['light']};
    }

    .chatbox-header img {
        width: 40px;
        height: 40px;
		margin: 0.8rem;
		padding: 0.2rem;
		border-radius: 50%;
		background-color: hsl(0,70%,90%);
    }

    .chatbox-header h3 {
        margin: 0px;
    }

    .chatbox-header p {
        margin: 0px;
        font-size: ${props => props.theme.fontSizes['sm']};
        
    }
	
    .chatbox-body {
        flex: 1;
        padding: 10px;
        background-color: ${props => props.theme.colors['light']};
        overflow-y: auto;
    }

    .message {
        display: flex;
        flex-direction: column;
        padding: 10px;
        border-radius: 10px;
        max-width: 75%;
        word-wrap: break-word;
        margin-bottom: 20px; 
        position: relative; /* Make the container position relative */
    }

    .my-message {
        align-self: flex-start;
        background-color: ${props => props.theme.colors['subtle']};
        margin-left: 70px;
    }

    .other-message {
        align-self: flex-end;
        background-color: #e3e3e3;
	color: ${props => props.theme.colors['dark']};;        
    }

    .message-meta {
        position: absolute; /* Make the meta information absolute */
        bottom: -18px; /* Position it below the message */
        color: #888; /* Color for meta information */
        font-size: ${props => props.theme.fontSizes['sm']};
    }

	
    .chatbox-footer {
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: ${props => props.theme.colors['light']};
    }

    .chatbox-footer input {
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-right: 10px;
        background-color: #e3e3e3;
    }

    .chatbox-footer button {
        background-color: ${props => props.theme.colors['subtle']};
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
		height: 38px;
    }

    .chatbox-footer button:hover {
        background-color: ${props => props.theme.colors['secondary']};
    }
`;
