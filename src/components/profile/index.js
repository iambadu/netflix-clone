import { ReactComponent as Logo } from '../../utils/logo.svg';
import P, { Picture } from './styles/profile';
import { Link } from 'react-router-dom';


export function ProfilePic({ src }) {
    return <Picture src={src ? `images/users/${src}.png` : `images/misc/loading.gif`}></Picture>
}

export function Profile({ user, setProfile }) {
    return (
        <>
            <P.Container>
                <P.LogoWrap>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </P.LogoWrap>
            </P.Container>
            <P.Wrap>
                <P.Title >Who is watching</P.Title>
                <P.UserWrap onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}>
                    <ProfilePic src={user.photoURL} />
                    <P.Text>{user.displayName}</P.Text>
                </P.UserWrap>
            </P.Wrap>

        </>
    )
}