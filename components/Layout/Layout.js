import Header from './Header';

const Layout = ({ children }) => {
	return (
		<div className='h-full'>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
