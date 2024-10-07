import { FC, useState } from 'react';
import {
  StyledSignup,
  ModalOverlay,
  StyledModal,
  CloseButton,
  Form,
  Input,
} from './Signup.style';

type SignupProps = {};

export const Signup: FC<SignupProps> = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setFormData({
      username: '',
      email: '',
      phone: '',
      password: '',
    });
  };

  return (
    <StyledSignup data-testid="Signup">
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </Form>

      {isModalOpen && (
        <ModalOverlay>
          <StyledModal>
            <h2>Signup Successful</h2>
            <p>Thank you for signing up!</p>
            <CloseButton onClick={handleCloseModal}>Close</CloseButton>
          </StyledModal>
        </ModalOverlay>
      )}
    </StyledSignup>
  );
};
