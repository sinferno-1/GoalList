import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  const[enteredGoalText, setenteredGoalText]= useState('');

  const[currentcoursegoals, setCourseGoals]= useState([]);

  function goalinputhandler(enteredText) {

    setenteredGoalText(enteredText);
    
  };
  

  function addgoalhandler() {
    setCourseGoals(currentcoursegoals=>[...currentcoursegoals, {text: enteredGoalText, key: Math.random().toString()}]);
  };

  let l= 0;



  return (
    <View style = {styles.appcontainer}>
      <View style={styles.inputcontainer}>    
       <TextInput style={styles.textinput} placeholder='Your Goal!' onChangeText={goalinputhandler} />
       <Button title= 'Add Goal' onPress={addgoalhandler} />
      </View>
      
      <View style ={styles.goals}>

            <Text style={styles.head}>List of Goals</Text>

          <FlatList data={currentcoursegoals} renderItem={itemData=> {
            return(
              <View style={styles.goal}> 
              <Text style={styles.t1}> {itemData.item.text} </Text>
        </View>

            );
          }}/>
          
              

      </View>

      </View>
  );
}

const styles = StyleSheet.create({

  inputcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 1,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#cccccc',
    flex: 1,
    

  },

  appcontainer: {
    padding: 40,
    flex: 1,
  },

  textinput: {
    borderColor: '#cccccc',
    width: '70%',
    borderWidth: 1,
    marginRight: 6,
    padding: 8,
  },

  goals: {
    flex: 3,
    margin: 1,
  },

  head: {
    marginBottom: 32,
    marginTop: 16,
  }, 

  goal: {
    borderColor: 'green',
    margin: 12,
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'green',
    borderWidth: 1,
  },

  t1: {
    color: 'white',
  }


  
});
