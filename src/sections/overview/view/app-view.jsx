import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { users } from 'src/_mock/challengers';
import { challenges } from 'src/_mock/challenges';

import ChallengeCard from 'src/sections/challenges/challenge-card';

import ChallengeStatistics from '../challenge-chart';
import ChallengeComments from '../challenge-comments';
import ChallengersCard from '../challenge-user-cards';


// ----------------------------------------------------------------------

function create_goal_title(c){
  return `목표 (${c.unit}) : ${c.goal}`;
}

export default function AppView() {
  const challenge = challenges[0];

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        {challenge.name}
      </Typography>

      <Grid container spacing={3}>
          
        <Grid xs={12} md={6} lg={4}>
          <ChallengeCard challenge={challenge} />
        </Grid>


        <Grid xs={12} md={6} lg={8}>
          <ChallengeStatistics
            title="Challenge 통계"
            subheader={create_goal_title(challenge)}
            unit={challenge.unit}
            chart={{
              labels: [
                '01/01/2024',
                '02/01/2024',
                '03/01/2024',
                '04/01/2024',
                '05/01/2024',
                '06/01/2024',
                '07/01/2024',
                '08/01/2024',
                '09/01/2024',
                '10/01/2024',
                '11/01/2024',
              ],
              series: [
                {
                  name: '챌린지 평균 기록',
                  type: 'area',
                  fill: 'gradient',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: '내 기록',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                }
              ],
            }}
          />
        </Grid>
 
        <Grid xs={12} md={6} lg={6}>
          <ChallengersCard
            title="Challengers"
            list={users}
          />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <ChallengeComments
            title="Comments"
            list={[...Array(4)].map((_, index) => ({
              id: faker.string.uuid(),
              title: sample(['유저 1','유저 2','유저 3']),
              description: sample(['어쩌고 저쩌고', 'ㅋㅋㅋㅋ', '님은요?','전 망했어요']),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid> 
      </Grid>
    </Container>
  );
}
