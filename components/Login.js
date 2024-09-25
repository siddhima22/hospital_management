import { useState } from 'react';
import {Text,View, Button,TextInput} from 'react-native';
export const Login=(props) =>{
  const [name,setName]=useState("");
  const age = 19;
    return(<View style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor:'lightblue'}}>
      
      <Text style={{fontSize:30}}>Login Screen</Text>
      <TextInput
      style={{fontSize:25,borderColor:'grey',borderWidth:2}}
      onChangeText={(text)=>setName(text)} 
      placeholder='enter name'></TextInput>
       <Button title='Go To Home Page'
        onPress={()=>props.navigation.navigate("Home",{name,age})}></Button>
        
    </View>)
  }