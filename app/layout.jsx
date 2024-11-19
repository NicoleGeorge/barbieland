import '@/assets/styles/globals.css'

export const metadata = {
	title: 'Barbieland Properties',
  description: 'A property listing app for properties in Barbieland',
}

const MainLayout = ({ children }) => {
	return (
		<html>
			<body>
				<main>{children}</main>
			</body>
		</html>
	)
}

export default MainLayout
