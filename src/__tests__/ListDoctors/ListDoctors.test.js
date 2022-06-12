import {
  fireEvent,
  render, screen, waitFor, waitForElementToBeRemoved,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ListDoctors from '../../components/Doctors/ListDoctors';
import store from '../../redux/store';

const Wrapper = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ListDoctors />
    </BrowserRouter>
  </Provider>
);
const doctor = [{
  city: "New Jearsy",
costPerDay: 70,
description: "Dr. Jane Doe is a nevrologiest who specializes in heart disease. She is a certified heart surgeon and a member of the American Heart Association.",
id: "2",
imageUrl: "http://localhost:3001/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d9d590deab090b564592db9bb1d5008f3a7c12ee/doctor2.jpg",
name: "Dr. Jane Doe",
specialization: "Nevrology"
}]
global.fetch = (url) => Promise.resolve({
  json: () => Promise.resolve(
  !url.includes('/2')?{data:doctor}: {message: 'Deleted'}
  ),
});
describe('listDoctors Component', () => {
  it('should render doctors list', async () => {
    render(<Wrapper />);

    await waitFor(() => expect(screen.getByAltText('docs')).toBeInTheDocument());
    const Doctor = screen.getByText('Dr. Jane Doe');
    expect(Doctor).toBeInTheDocument();
  });

  it('doctors should be removed on delete', async () => {
    render(<Wrapper />);
    fireEvent.click(screen.getByRole('button'));
    await waitForElementToBeRemoved(screen.getByAltText('docs'), {timeout: 3000});
    expect(document.querySelectorAll('svg').length).toBe(0);
  })
});
