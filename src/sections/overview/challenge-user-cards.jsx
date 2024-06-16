import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

import Iconify from 'src/components/iconify';


// ----------------------------------------------------------------------

export default function ChallengersCard({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box
        sx={{
          p: 3,
          gap: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        {list.map((user) => (
          <Paper
            key={user.name}
            variant="outlined"
            sx={{ py: 2.5, textAlign: 'center', borderStyle: 'dashed' }}
          >
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
              {user.name}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              소개?
            </Typography>
            
            <Typography variant="body2">{user.comment}</Typography>

          </Paper>
        ))}
      </Box>
      
      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}

ChallengersCard.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};
