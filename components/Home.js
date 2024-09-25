import {Text,View, Button} from 'react-native';
export const Home=(props) =>{
  console.warn(props.route.params)
  const{name,age}=props.route.params;
  return(<View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>Home Screen</Text>
      <Text style={{fontSize:30}}>NAME:{name}</Text>
      <Text style={{fontSize:30}}>AGE:{age}</Text>

    </View>)
  }