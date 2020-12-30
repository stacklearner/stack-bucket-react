import { Router, Redirect } from '@reach/router';

// Custom Components
import BucketPage from '../pages/buckets';
import BucketDetailPage from '../pages/bucket-detail';
import NotFound from '../pages/404';

function AppRouter() {
	return (
		<Router>
			<BucketPage path='/' />
			<Redirect from='buckets' to='/' noThrow />
			<BucketDetailPage path='/buckets/:bucketID' />
			<NotFound default />
		</Router>
	);
}

export default AppRouter;
