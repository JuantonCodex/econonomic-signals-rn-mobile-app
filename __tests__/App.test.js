import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import App from '../App';

let component;

jest.useFakeTimers();
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('<App />', () => {
  beforeEach(() => {
    component = render(<App />);
  });

  it('Renderiza items luego de llamar al API de indicadores', () => {
    // El componente está definido
    expect(component).toBeDefined();

    // Espera el render de al menos un item de la lista de indicadores
    waitFor(() =>
      expect(component.getByTestId('flat-list-item')).toBeDefined()
    );
  });
});
