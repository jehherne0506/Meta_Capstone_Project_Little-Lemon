import { render, screen } from '@testing-library/react';
import App from './App';
import Reservation from './Components/Pages/Reservations/reservation';

test('renders Booking Form', () => {
  render(<Reservation />);
  const heading_element = screen.getByText('Table Reservation')
  expect(heading_element).toBeInTheDocument();
});
