import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemeText'
import Spacer from '../../components/ThemedSpace'
import { useRouter } from 'expo-router'
import PrimaryBtn from '../../components/PrimaryBtn'
import ThemedInput from '../../components/ThemedInput'
import useBooks from '../../hooks/useBooks'

const Create = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { addBook } = useBooks();

  const router = useRouter();
  const handleSubmit = async () => {
    setError(null);
    try{
      if(!title.trim() || !author.trim() || !description.trim()) return
      setLoading(true)

      await addBook({ title, author, description });

      // reset the form and navigate back to book list
      setTitle('');
      setAuthor('');
      setDescription('');
      router.replace('/books');
      setLoading(false);
    } catch (error) {
      setError(error.message || "An error occurred during registration");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <ThemedView style={styles.container}>
        <ThemedText title={true}>Create Book</ThemedText>
        <Spacer height={40}/>
        <ThemedInput
          style={{width: '80%', marginBottom: 20}}
          value={title}
          onChangeText={setTitle}
          placeholder='Title' 
          autoCapitalize='none'
        />
        <ThemedInput
          style={{width: '80%', marginBottom: 20}}
          value={author}
          onChangeText={setAuthor}
          placeholder='Author' 
          autoCapitalize='none'
        />
        <ThemedInput
          style={{width: '80%', marginBottom: 20, minHeight: 100, textAlignVertical: 'top'}}
          value={description}
          onChangeText={setDescription}
          placeholder='Description' 
          autoCapitalize='none'
          multiline
          numberOfLines={4}
        />
        <Spacer height={30}/>
        {error && <ThemedText style={{ width: '80%', color: 'red', padding: 10, borderWidth: 1, borderColor: 'red' }}>{error}</ThemedText>}
        <Spacer height={30}/>
        <PrimaryBtn onPress={handleSubmit} disabled={loading}>
          <Text>{loading ? 'Creating...' : 'Create Book'}</Text>
        </PrimaryBtn>
      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Create

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})