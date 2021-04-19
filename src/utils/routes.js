import { Route, Redirect } from 'react-router-dom';

export function RedirectUser({ loggedinPath, children, user, ...rest }) {
    return (
        <Route
            {...rest}
            render={() => {
                if (user) {
                    return children
                } else {
                    return (<Redirect to={{pathname: loggedinPath}} />)
                }
                
            }}
        />
    )
}


export function ProtectedRoute({ loggedOutPath, children, user, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (user) {
                    return children
                } else {
                    return (
                        <Redirect to={{
                            pathname: loggedOutPath,
                            state: { from: location }
                        }} />
                    )
                }

            }}
        />
    )
}