import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

  const [coursegoals, setCourseGoals] = useState([]);


  function addgoalhandler(enteredGoalText) {
    setCourseGoals((currentcoursegoals) => [
      ...currentcoursegoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

    function deleteGoalHandler(id){
      setCourseGoals(currentcoursegoals=>{
        return currentcoursegoals.filter((goal)=>goal.id!==id);
        
      })
      console.log('DELETE');
    }
  

  let l = 0;

  return (
    <View style={styles.appcontainer}>
      
    <GoalInput onAddGoal={addgoalhandler}/>

      <View style={styles.goals}>
        <Text style={styles.head}>List of Goals</Text>

        <FlatList
          data={coursegoals}
          renderItem={(itemData) => {
            return <GoalItem 
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}

          // alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({


  appcontainer: {
    padding: 30,
    flex: 1,
  },


  head: {
    // marginBottom: 20,
    marginTop: 15,
    marginBottom: 35,
  },

  goal: {
    borderColor: "green",
    margin: 12,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "green",
    borderWidth: 1,
  },
});
