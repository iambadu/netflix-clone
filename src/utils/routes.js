import { Route, Redirect } from 'react-router-dom';

export function RedirectUser({ loggedinPath, children, user, ...rest }) {
    return (
        <Route 
        {...rest}
        render = {() => {
            if (!user) {
                return children
            } else if(user) {
                return (
                    <Redirect
                    to={{
                        pathname: loggedinPath
                    }}
                    />
                )
            }
            return null
        }}
        />
    )
}