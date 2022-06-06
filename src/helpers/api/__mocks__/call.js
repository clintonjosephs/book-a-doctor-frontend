export const endpoint = '';

export const postRequestWithFormData = async (path, index) => {
  if (index === 1) {
    return { token: 'eyJhb', exp: '2022-06-07', user_details: { name: 'test', email: 'test@test.fr', role: 'user' } };
  }
  return { error: 'unauthorized', error_message: { email: ['has already been taken'] } };
};
