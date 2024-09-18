import React from 'react'
import ReactDOM from 'react-dom/client'
// import {FirebaseProvider} from './Firebase'
// import OTPComponent from './OTPService'
// import OTPVerification from './OTPForm'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>

		{/* <FirebaseProvider> */}
		<App />
			{/* </FirebaseProvider> */}

	</React.StrictMode>
)