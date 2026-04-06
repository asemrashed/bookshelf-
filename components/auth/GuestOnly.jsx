import React, { Children, useEffect } from 'react'
import useUser from '../../hooks/useUser'
import { useRouter } from 'expo-router';
import ThemedLoader from '../themedLoader';

function GuestOnly({ children }) {
    const { user, authChecked } = useUser();
    const router = useRouter();

    useEffect(() => {
        if(authChecked && user !== null) {
            router.push('/profile');
        }
    },[authChecked, user])

    if(!authChecked || user) {
        return (
            <ThemedLoader/>
        )
    }
  
    return children
}

export default GuestOnly