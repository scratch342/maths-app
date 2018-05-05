import React from 'react';

const Navigation = ( { isSignedIn, onRouteChange } ) => {
					if(isSignedIn){
						return(
							<div className="navigation">
								<button 
								className="btn btn-danger"
								onClick={() => onRouteChange('signout')}>
								Sign Out
								</button>
							</div>
						);
					}else{
						return(
							<div className="navigation">

								<button
								className="btn btn-primary"
								onClick={() => onRouteChange('signin')}
								>Sign in</button>

								<button
								className="btn btn-primary"
								onClick={() => onRouteChange('signout')}
								>Register</button>
							</div>
						)
					}

}

export default Navigation;