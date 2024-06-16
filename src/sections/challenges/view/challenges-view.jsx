import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { challenges } from 'src/_mock/challenges';

import ChallengeCard from '../challenge-card';

// ----------------------------------------------------------------------

export default function ChallengesView() {
  // https://mui.com/material-ui/react-grid/
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Challenges
      </Typography>
      <Typography align="center" variant="h3" sx={{ mb: 5 }}>
        Go To Enjoy!!
      </Typography>

      <Grid container spacing={3}>
        {challenges.map((challenge) => (
          <Grid key={challenge.id} xs={12} sm={6} md={4}>
            <ChallengeCard challenge={challenge} />
          </Grid>
        ))}
      </Grid>

    </Container>
  );
}
