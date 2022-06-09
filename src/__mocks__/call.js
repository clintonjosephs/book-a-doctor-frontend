import DoctorsData from './DoctorsData';

export const endpoint = '';

export const postRequestWithFormData = async (path, index) => {
  if (index === 1) {
    return {
      token: 'eyJhb',
      exp: '2022-06-07',
      user_details: { name: 'test', email: 'test@test.fr', role: 'user' },
    };
  }
  return {
    error: 'unauthorized',
    error_message: { email: ['has already been taken'] },
  };
};

export const postRequest = async (index) => {
  if (index === 1) {
    return {
      message: 'Appointment created',
      data: {
        doctor_id: 1,
        date_of_appointment: '2020/10/10',
      },
    };
  }
  return {
    error: 'string',
    error_message: {},
  };
};

export const fetchAllDoctors = async () => DoctorsData;
