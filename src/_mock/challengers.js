import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(4)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: `유저 ${index + 1}`,
  status: sample(['active', 'banned']),
  comment: sample([
    '화이팅',
    '홧팅',
    '아이캔 두잇'
  ]),
}));
