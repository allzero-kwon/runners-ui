import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const CHALLENGE_FAKE = [{
  'cover' : 'c1.png',
  'name' : '챌린지 1',
  'desc' : '챌린지 1 입니다.',
  'status' : 'new',
  'unit' : '거리',
  'goal' : '10K'
},{
  'cover' : 'c2.png',
  'name' : '챌린지 2',
  'desc' : '챌린지 2 입니다.',
  'status' : '모집중',
  'unit' : '거리',
  'goal' : '20K'
},{
  'cover' : 'c3.png',
  'name' : '챌린지 3',
  'desc' : '챌린지 3 입니다.',
  'status' : '마감',
  'unit' : '거리',
  'goal' : '42K'
}]


// ----------------------------------------------------------------------

export const challenges = [...Array(3)].map((_, index) => {
  const id = faker.string.uuid();

  return {
    id: `${id}`,
    cover: `/assets/images/challenges/${CHALLENGE_FAKE[index].cover}`,
    name: CHALLENGE_FAKE[index].name,
    desc: CHALLENGE_FAKE[index].desc,
    unit: CHALLENGE_FAKE[index].unit,
    goal: CHALLENGE_FAKE[index].goal,
    status: CHALLENGE_FAKE[index].status,
  };
});
