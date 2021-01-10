import Nav from '../../components/nav';
import Create from '../../components/create';
import Table from '../../components/table';

function BucketDetailPage() {
	return (
		<div>
			{/* Navigation Bar */}
			<Nav />
			{/* Main Content Body */}
			<main className='container __margin--ylg'>
				{/* Create New Item */}
				<Create extra label='Add New Item' />
				{/* Item Table */}
				<section className='section table __shadow--sm'>
					<Table />
				</section>
				{/* Item Table Completed */}
				<section className='section table table--success __shadow--sm'>
					<Table />
				</section>
			</main>
		</div>
	);
}

export default BucketDetailPage;
