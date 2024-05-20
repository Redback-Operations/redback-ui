import React, { useState } from 'react';
import { StyledSupportChatbox } from './SupportChatbox.style';
import { Forward } from 'lucide-react';

// Define the Message object with text, sender, and timestamp properties
type Message = {
	text: string;
	sender: 'me' | 'other';
	timestamp: string;
};

type SupportChatboxProps = NonNullable<unknown>;

export const SupportChatbox: React.FC<SupportChatboxProps> = () => {
	// State to hold the current message input by the user
	const [currentMessage, setCurrentMessage] = useState('');

	// State to hold the list of messages, starting with a default message from Redback support
	const [messageList, setMessageList] = useState<Message[]>([
		{ text: 'Hi, how can I assist you today?', sender: 'other', timestamp: new Date().toLocaleTimeString() }
	]);

	// Handler for input change, updates the current message state
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentMessage(e.target.value);
	};

	// Handler for sending a message, updates the message list and clears the input
	const handleSendMessage = () => {
		if (currentMessage.trim()) {
			// Create a new message object with the current message text, sender 'me', and timestamp
			const newMessage: Message = { text: currentMessage, sender: 'me', timestamp: new Date().toLocaleTimeString() };

			// Update the message list state to include the new message
			setMessageList([...messageList, newMessage]);

			// Clear the current message input
			setCurrentMessage('');
		}
	};

	// Handler for handling "Enter" key press in the input field
	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSendMessage(); // Call the sendMessage function if "Enter" is pressed
		}
	};

	return (
		<StyledSupportChatbox data-testid="SupportChatbox">
			<div className="chatbox-container">
				<div className="chatbox-header">
					<img src='https://redback-operations.github.io/redback-ui/icon.svg' alt={'Redback logo'} />
					<div>
						<h3>Need help?</h3>
						<p>Our team will assist you shortly</p>
					</div>
				</div>
				<div className="chatbox-body">
					{messageList.map((message, index) => (
						<div
							key={index}
							className={`message ${message.sender === 'me' ? 'my-message' : 'other-message'}`}
						>
							<div className="message-content">
								{message.text}
							</div>
							<div className="message-meta">
								<span>{message.sender === 'me' ? 'You:' : 'Redback Support:'}</span> {/* Display sender */}
								<span>{message.timestamp}</span> {/* Display timestamp */}
							</div>
						</div>
					))}
				</div>
				<div className="chatbox-footer">
					<input
						type='text'
						value={currentMessage}
						placeholder='Type your message here...'
						onChange={handleInputChange}
						onKeyPress={handleKeyPress}
					/>
					<button onClick={handleSendMessage}>
						<Forward />
					</button>
				</div>
			</div>
		</StyledSupportChatbox>
	);
};
