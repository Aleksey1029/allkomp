import { AppButton } from '../components/UI/AppButton'
import { Heading } from '../components/Typography/Heading'
import { Progressbar } from '../components/UI/Progressbar'

const StepOne = () => {
	return (
		<div className='container'>
			<div className='wrapper'>
				<div className='single-input-quiz'>
					<Progressbar />
					<div className='question'>
						<Heading
							headingType='h2'
							headingText='1. Где вы узнали про нашу школу?'
						/>
						<label className='input-wrapper'>
							<input
								required
								type='text'
								name='answer'
								placeholder='Ваш ответ'
							/>
							<span id='error-message'>Введите ваш ответ</span>
						</label>
						<AppButton buttonText='Далее' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default StepOne
