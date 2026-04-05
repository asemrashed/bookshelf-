import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ThemedText from '../../components/ThemeText'
import ThemedView from '../../components/ThemedView'
import useUser from '../../hooks/useUser'
import Spacer from '../../components/ThemedSpace'
import PrimaryBtn from '../../components/PrimaryBtn'

const Profile = () => {
  const { user, logout } = useUser();
  const [error, setError] = useState(null);

  const handleLogOut = async() =>{
    setError(null);
    try{
      await logout();
      alert('Logged out successfully');
      setError(null);
    }catch (error) {
      setError(error.message || "An error occurred during logout");
    }
  }
  return (
    <ThemedView safe= {true} style={styles.container}>
      {error && <Text style={{ width: '80%', color: 'red', padding: 10, marginBottom:20, borderWidth: 1, borderColor: 'red' }}>{error}</Text>}
      <ThemedText title={true}>Profile</ThemedText>
      <ThemedText title={true}>{user?.email}</ThemedText>
      <PrimaryBtn onPress={handleLogOut} style={{marginTop: 20}}>
        <Text>Logout</Text>
      </PrimaryBtn>
    </ThemedView>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center', 
        paddingTop: 40,
        paddingBottom: 40
    }
})