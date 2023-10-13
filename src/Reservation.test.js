import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Reservation from './pages/Reservation';

describe('Reservation page with live time availablility  data', () => {
  it('should have all input fields should be in place', () => {
    render(
      <BrowserRouter>
        <Reservation />
      </BrowserRouter>
    );
    expect(screen.getByLabelText('firstname')).toBeInTheDocument();
    expect(screen.getByLabelText('lastname')).toBeInTheDocument();
    expect(screen.getByLabelText('email')).toBeInTheDocument();
    expect(screen.getByLabelText('phone')).toBeInTheDocument();
    expect(screen.getByLabelText('date')).toBeInTheDocument();
    expect(screen.getByLabelText('guests')).toBeInTheDocument();
    expect(screen.getByLabelText('time')).toBeInTheDocument();
    expect(screen.getByLabelText('occasion')).toBeInTheDocument();
    expect(screen.getByLabelText('preference')).toBeInTheDocument();
    expect(screen.getByLabelText('other')).toBeInTheDocument();
  });

  it('should be no time availablility options before selecting a date', () => {
    render(
      <BrowserRouter>
        <Reservation />
      </BrowserRouter>
    );
    const timeOption = screen.getByLabelText('time-0');
    expect(timeOption).toBeUndefined;
  });

  it('should have time availablility options after selecting a date', () => {
    render(
      <BrowserRouter>
        <Reservation />
      </BrowserRouter>
    );
    //select a date
    const dateInputField = screen.getByLabelText('date');
    fireEvent.mouseDown(dateInputField);
    fireEvent.change(dateInputField, { target: { value: '2023-12-24' } });

    const timeOption = screen.getByLabelText('time-0');
    expect(timeOption).toBeInTheDocument();
  });
});
