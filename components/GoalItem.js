import { StyleSheet } from "react-native";
import {View, Text, Pressable} from "react-native";

function GoalItem(props){

  return(
  
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
    <View style={styles.goal}>

    <Text style={styles.t1}> {props.text} </Text>

    </View>
    </Pressable>
    
  );

}

export default GoalItem;

const styles = StyleSheet.create({

    t1: {
        color: 'black',
        margin: 1,
        borderColor: 'green',
        borderWidth: 1,
        padding: 8,
        margin: 8, 
        borderRadius: 6,
      },

      goals: {
        flex: 3,
        margin: 8,
        padding: 8,
      },


});