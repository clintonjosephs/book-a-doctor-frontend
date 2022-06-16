import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';
import ListDoctors from '../../../components/Doctors/ListDoctors';

let Wrapper;
beforeEach(() => {
  Wrapper = render(
    <Router>
      <ListDoctors />
    </Router>,
  );
});

const mockDoctorsData = [{
  city: 'New Jearsy',
  costPerDay: 70,
  description: 'Dr. Jane Doe is a nevrologiest who specializes in heart disease. She is a certified heart surgeon and a member of the American Heart Association.',
  id: '2',
  imageUrl: 'http://localhost:3001/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d9d590deab090b564592db9bb1d5008f3a7c12ee/doctor2.jpg',
  name: 'Dr. Jane Doe',
  specialization: 'Nevrology',
},
{
  city: 'Another Test Doctor',
  costPerDay: 72,
  description: 'Dr. Jane Doe is a nevrologiest who specializes in heart disease. She is a certified heart surgeon and a member of the American Heart Association.',
  id: '3',
  imageUrl: 'http://localhost:3001/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d9d590deab090b564592db9bb1d5008f3a7c12ee/doctor2.jpg',
  name: 'Mr. Test Doctor',
  specialization: 'Local Medicine',
}];

fetchMock.enableMocks();

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: () => (
    mockDoctorsData
  ),
  useDispatch: () => mockDispatch,
}));


afterEach(() => {
  cleanup();
});

describe('listDoctors Component', () => {
  it('should render doctors list', async () => {
    const response = await Wrapper.getAllByAltText('docs');
     expect(response.length).toEqual(2);
    const Doctor = Wrapper.getByText('Dr. Jane Doe');
    expect(Doctor).toBeInTheDocument();
  });
});
