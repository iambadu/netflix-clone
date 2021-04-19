import { useContext } from 'react';
import { ReactComponent as Logo } from '../../utils/logo.svg';
import P, { Picture } from './styles/profile';
import { FirebaseContext } from '../../context/fireContext';


export function ProfilePic({ src }) {
    return <Picture src={src ? `images/users/${src}.png` : `images/misc/loading.gif`}></Picture>
}

export function Profile({ user, setProfile }) {
    console.log(user);
    return (
        <>
            <P.Container>
                <P.LogoWrap><Logo /></P.LogoWrap>
            </P.Container>
            <P.Wrap>
                <P.Title >Who is watching</P.Title>
                <P.UserWrap onClick={()=> setProfile({displayName: user.displayName, photoURL: user.photoURL})}>
                    <ProfilePic src={user.photoURL} />
                    <P.Text>{user.displayName}</P.Text>
                </P.UserWrap>
            </P.Wrap>

        </>
    )
}