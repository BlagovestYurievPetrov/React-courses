import RequestReset from '../components/RequestReset';
import Reset from '../components/Reset';

export default function ResetPage({ query }) {
  if (!query?.token) {
    return (
      <div>
        <p>Please supply token</p>
        <RequestReset />
      </div>
    );
  }
  return (
    <div>
      <p>Reset password {query.token}</p>
      <Reset token={query.token} />
    </div>
  );
}
