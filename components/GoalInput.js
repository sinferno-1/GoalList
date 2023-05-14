import { View, TextInput, Button, StyleSheet, Modal  } from "react-native";
import { useState } from "react";

function GoalInput(props){
    
  const [enteredGoalText, setenteredGoalText] = useState("");

  
  function goalinputhandler(enteredText) {
    setenteredGoalText(enteredText);
  }

  function addgoalhandler() {
   props.onAddGoal(enteredGoalText);
   setenteredGoalText('');
  }

    return(
      // <Modal>
      // </Modal>
        <View style={styles.inputcontainer}>
          
        <TextInput
          style={styles.textinput}
          placeholder="Your Goal!"
          onChangeText={goalinputhandler}
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addgoalhandler} />
      </View>
    );


};

export default GoalInput;

const styles= StyleSheet.create({

    inputcontainer: {
      padding: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 1,
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "grey",
        marginBottom: 20,
        marginTop: 40,
      },

      
    textinput: {
    borderColor: "#cccccc",
    width: "70%",
    borderWidth: 1,
    marginRight: 6,
    padding: 5,
    flex: 1,
  },


});