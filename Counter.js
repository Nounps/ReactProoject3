import React, {useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Counter = ({ initialValue }) => {
  const[count,setCount] = useState(0);
  // TODO: Use the useState hook to manage the counter state

  // TODO: Implement the incrementCounter function that will increase the counter value

  return (
    <View>
      {/* TODO: Display the counter value */}
      <Text>Count: {count}</Text>
    
      <TouchableOpacity onPress={() => setCount(count + 1)}> 
        <Text >increment</Text> 
      </TouchableOpacity>
     

      {/* TODO: Implement a button to increment the counter */}
    </View>
  );
};


const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    fontWeight: "800",
  },
  button: {
    marginTop: 40,
    backgroundColor: "tomato",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "red",
    fontSize: 28,
  },
}
);
export default Counter;