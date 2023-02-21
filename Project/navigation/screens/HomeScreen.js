import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Input, Stack  } from "native-base";

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text >
        <Input size="lg" mx="auto" placeholder="Enter your flower" w="100%"/>
      
          </Text>
          <Text style={{ marginTop: 20 }}>
       <Button shadow={2} onPress={() => console.log("hello world")}>
       Add flower
        </Button></Text>
        </View>
    );
}