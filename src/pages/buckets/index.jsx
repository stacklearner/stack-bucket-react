import Nav from '../../components/nav';
import Create from '../../components/create';
import Table from '../../components/table';

function BucketPage() {
	return (
		<div>
			{/* Navigation Bar */}
			<Nav />
			{/* Main Content Body */}
			<main className='container __margin--ylg'>
				{/* Add New Bucket Section */}
				<Create label='Create New Bucket' />
				{/* Buckets Table */}
				<div className='section table __shadow--sm'>
					<Table />
				</div>
			</main>
		</div>
	);
}

export default BucketPage;
