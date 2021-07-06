import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InputNumerico from './InputNumerico';

describe('Componente InputNumerico', () => {
  test('Renderiza InputNumerico', () => {
    render(<InputNumerico />);
  });

  test('Mostra erro com numero fora da faixa', () => {
    render(<InputNumerico max={5} initialValue={10} />);
    const error = screen.getByText(/erro/i);
    expect(error).toBeInTheDocument();
  });

  test('Mostra erro com numero fora da faixa utilizando o queryBy', () => {
    render(<InputNumerico max={5} initialValue={10} />);
    const error = screen.queryByText(/error/i);
    expect(error).toBeNull();
  });

  test('Digita um valor invalido', () => {
    render(<InputNumerico max={9} />);
    const input = screen.getByLabelText(/numero/i);
    userEvent.type(input, '7');
    userEvent.type(input, '0');
    const error = screen.queryByText(/erro/i);
    expect(error).toBeInTheDocument();
  });

  test('Escolhe numero correto', async () => {
    render(<InputNumerico correct={10} max={100} />);
    const input = screen.getByLabelText(/numero/i);
    userEvent.type(input, '10');
    const msg = await screen.findByText(/numero correto/i);
    expect(msg).toBeInTheDocument();
  });
});
