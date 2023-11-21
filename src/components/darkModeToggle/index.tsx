import { useState, useEffect } from 'react';
import { darkIcon,lightIcon, darkModeIcon } from '../../assets/svg/darkModeToggle'

const DarkModeToggle = () => {

	let switchToggle;

	if (typeof document !== "undefined") {
	switchToggle = document.querySelector('#switch-toggle');
	}

	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (
			localStorage.getItem('darkMode') === 'true' ||
			(!('darkMode' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.querySelector('html')!.classList.add('dark');
			localStorage.setItem('darkMode', 'true');
			switchToggle!.classList.add('bg-yellow-500', '-translate-x-2');
			switchToggle!.classList.remove('bg-gray-700', 'translate-x-full');
			setTimeout(() => {
				switchToggle!.innerHTML = lightIcon;
			}, 250);
		} else {
			document.querySelector('html')!.classList.remove('dark');
			localStorage.setItem('darkMode', 'false');
			switchToggle!.classList.remove('bg-yellow-500', '-translate-x-2');
			switchToggle!.classList.add('bg-gray-700', 'translate-x-full');
			setTimeout(() => {
				switchToggle!.innerHTML = darkIcon;
			}, 250);
			setIsDarkMode(false)
		}
	}, []);
	
	const toggleDarkMode = () => {
		window.matchMedia('(prefers-color-scheme: dark)').matches ? setIsDarkMode(false) : setIsDarkMode(true)
		const darkModeEnabled = !isDarkMode;
		setIsDarkMode(darkModeEnabled);
		document.documentElement.classList.toggle('dark', darkModeEnabled);
		localStorage.setItem('darkMode', darkModeEnabled.toString());
	};

	useEffect(() => {
		const isDark = localStorage.getItem('darkMode') === 'true';
		setIsDarkMode(isDark);
		if (isDark) {
			document.documentElement.classList.add('dark');
			switchToggle!.classList.add('bg-yellow-500', '-translate-x-2');
			switchToggle!.classList.remove('bg-gray-700', 'translate-x-full');
			setTimeout(() => {
				switchToggle!.innerHTML = lightIcon;
			}, 250);
		}
	}, []);

	const switchTheme = () => {
		if (!isDarkMode) {
			switchToggle!.classList.add('bg-yellow-500', '-translate-x-2');
			switchToggle!.classList.remove('bg-gray-700', 'translate-x-full');
			setTimeout(() => {
				switchToggle!.innerHTML = lightIcon;
			}, 250);
		} else {
			switchToggle!.classList.remove('bg-yellow-500', '-translate-x-2');
			switchToggle!.classList.add('bg-gray-700', 'translate-x-full');
			setTimeout(() => {
				switchToggle!.innerHTML = darkIcon;
			}, 250);
		}
		toggleDarkMode()
	};

	return (
		<div className='px-5'>
		<button
			className='w-12 h-7 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow'
			onClick={switchTheme}>
			<div
				id='switch-toggle'
				className='w-8 h-8 relative rounded-full transition duration-500 transform bg-yellow-500 -translate-x-2 p-1 text-white'>
					<img src={darkModeIcon}/>
			</div>
		</button>
		</div>
	);
};

export default DarkModeToggle;
