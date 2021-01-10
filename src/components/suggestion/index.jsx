import leftArrowIcon from '../../assets/icons/left-arrow-icon.png';
import rightArrowIcon from '../../assets/icons/right-arrow-icon.png';

function Suggestions() {
	return (
		<div className='add-item__suggestions'>
			<div className='add-item__suggestion-control add-item__suggestion-control--prev'>
				<img
					className='add-item__suggestion-control-icon'
					src={leftArrowIcon}
					alt='Previous'
				/>
			</div>
			<div className='add-item__suggestion-chips'>
				<div className='add-item__suggestion-chip-item'>Egg</div>
				<div className='add-item__suggestion-chip-item'>Carrot</div>
				<div className='add-item__suggestion-chip-item'>Banana</div>
				<div className='add-item__suggestion-chip-item'>Apple</div>
				<div className='add-item__suggestion-chip-item'>Coke</div>
				<div className='add-item__suggestion-chip-item'>Water</div>
				<div className='add-item__suggestion-chip-item'>Medicine</div>
				<div className='add-item__suggestion-chip-item'>Milk</div>
				<div className='add-item__suggestion-chip-item'>Apple</div>
				<div className='add-item__suggestion-chip-item'>Coke</div>
				<div className='add-item__suggestion-chip-item'>Water</div>
				<div className='add-item__suggestion-chip-item'>Medicine</div>
				<div className='add-item__suggestion-chip-item'>Apple</div>
				<div className='add-item__suggestion-chip-item'>Coke</div>
				<div className='add-item__suggestion-chip-item'>Water</div>
				<div className='add-item__suggestion-chip-item'>Medicine</div>
				<div className='add-item__suggestion-chip-item'>Milk</div>
			</div>
			<div className='add-item__suggestion-control add-item__suggestion-control--next'>
				<img
					className='add-item__suggestion-control-icon'
					src={rightArrowIcon}
					alt='Next'
				/>
			</div>
		</div>
	);
}

export default Suggestions;
