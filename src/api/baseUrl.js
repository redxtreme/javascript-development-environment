/*
Switches to the mockapi if we are in development
*/
export default function getBaseUrl() {
	const inDevelopment = window.location.hostname === 'localhost';
	return inDevelopment ? 'http://localhost:3001/' : '/';
}
