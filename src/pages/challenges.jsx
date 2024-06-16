import { Helmet } from 'react-helmet-async';

import { ChallengesView } from 'src/sections/challenges/view';

// ----------------------------------------------------------------------

export default function ChallengeListPage() {
  return (
    <>
      <Helmet>
        <title> Challenges | Minimal UI </title>
      </Helmet>

      <ChallengesView />
    </>
  );
}
