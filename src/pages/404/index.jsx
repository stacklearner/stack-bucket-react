// Import Assets
import brandLogo from '../../assets/brand-logo/brand-logo.svg';
import moreMenu from '../../assets/icons/more-menu.png';

function NotFound() {
	return (
		<div>
			{/* Navigation Bar */}
			<nav className='nav __shadow--lg'>
				<div className='container nav__container'>
					<div className='nav__brand'>
						<img
							className='nav__brand-logo'
							src={brandLogo}
							alt='Brand Logo'
						/>
						<h1 className='nav__brand-name'>Stack Learner</h1>
					</div>
					<div className='nav__menu nav__menu--right'>
						<div className='nav__menu-items'>
							<img
								className='nav__menu-icon'
								src={moreMenu}
								alt='More Menu'
							/>
						</div>
					</div>
				</div>
			</nav>
			{/* Main Content Body */}
			<main className='container __margin--ylg'>
				<h1>404 Page Not Found</h1>
			</main>
		</div>
	);
}

export default NotFound;
