import { StyleSheet } from "react-native";
import {View, Text, Pressable} from "react-native";

function GoalItem(props){

  return(
  
    <View style={styles.goal}>
    <Pressable android_ripple={{color: 'lightgreen'}} onPress={props.onDeleteItem.bind(this, props.id)}>

    <Text style={styles.t1}> {props.text} </Text>

    </Pressable>
    </View>
    
  );

}

export default GoalItem;

const styles = StyleSheet.create({

    t1: {
        color: 'black',
        // margin: 1,
        borderColor: 'green',
        borderWidth: 1,
        padding: 8,
        margin: 8, 
        borderRadius: 6,
      },

      goals: {
        flex: 3,
        margin: 8,
        // padding: 8,
        // paddingBottom: 10,
      },


});