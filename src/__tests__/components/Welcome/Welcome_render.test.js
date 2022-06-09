import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';
import Welcome from '../../../pages/Welcome/Welcome';
import mockDoctorsData from '../../../__mocks__/DoctorsData';
import { chunkArray } from '../../../helpers/format/format';

fetchMock.enableMocks();
const mockDataFirst = chunkArray(mockDoctorsData)[0];
const mockDataAll = chunkArray(mockDoctorsData);

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => ({
    currentCarouselState: [...mockDataFirst],
    doctorsChunked: [...mockDataAll],
    loading: false,
  }),
  useDispatch: () => mockDispatch,
}));

let WelcomeProvider;
beforeEach(() => {
  WelcomeProvider = render(
    <Router>
      <Welcome />
    </Router>,
  );
});

afterEach(() => {
  cleanup();
});

describe('Test the welcome page and the data received', () => {
  it('renders the correct page', () => {
    const result = WelcomeProvider.getByText('AVAILABLE DOCTORS');
    expect(result).toBeInTheDocument();
  });

  it('renders the correct page test 2', () => {
    const result = WelcomeProvider.getByText('Please select a doctor');
    expect(result).toBeInTheDocument();
  });

  it('renders three images per slide', () => {
    const images = WelcomeProvider.getByRole('list');
    expect(images.children.length).toBe(3);
  });

  it('renders the next button', () => {
    const result = WelcomeProvider.getByTestId('next');
    expect(result).toBeInTheDocument();
  });

  it('renders the previous button', () => {
    const result = WelcomeProvider.getByTestId('previous');
    expect(result).toBeInTheDocument();
  });
});
