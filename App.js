/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  Button,
  FlatList,
  Dimensions
} from 'react-native';
import data from './model/data';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },

  /******** card **************/
  card:{
    width: width,
    height:60,
    flexDirection:'row',
    padding:20,
    borderColor:'black',
    borderEndWidth:10,
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  cardImage:{
    marginLeft:20,
    marginTop:20,
    height: 30,
    width: 30,
  },
  title:{
    fontSize:28,
    flex:1,
    color:"black",
    fontWeight:'bold',
    marginLeft:70,
    marginTop:10
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});    

 class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
     data
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {  if(item.isVisible=="true"){
            return (
              <View style={{borderBottomColor:'black',borderBottomWidth: 2}}>
                
                  <LinearGradient
                    colors={['blue','white']}
                    style={{height:60,width:width,
                    borderRadius:2,
                                   }}
                                                      >   
                                       
                                    <Text style={{fontSize:28,
                                flex:1,
                                color:"black",
                                fontWeight:'bold',
                                marginLeft:20,
                                marginTop:10}}>{item.title}</Text>
                  </LinearGradient>
               

        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={item.options}
          horizontal={false}
          keyExtractor= {item => item.label}
          renderItem={({item}) => {
            
            if(item.canSee=="true"){
                return (
                  <View style={{borderBottomColor:'black',borderBottomWidth: 2}}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate(item.navigate)} style={[styles.card]} >
                  <LinearGradient
                    colors={['grey','white']}
                    style={{height:60,width:width,
                    borderRadius:2,
                                   }}
                                      >  
                                             
                          <Text style={styles.title}>{item.label}</Text>
                  </LinearGradient>
                  </TouchableOpacity>
     
              </View>
                )
                                  }
        
          }}/>
      </View>
    );
                                                                }
}}/>
</View>
    );

  }
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      
      <Button
        title="Go to Menu"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      
    </View>
  );
}
function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      
    </View>
  );
}
function Screen1Screen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Screen 1</Text>
      
      <Button
        title="Go to Menu"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
}


function Screen2Screen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Screen 2</Text>
      
      <Button
        title="Go to Menu"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
}
function Screen3Screen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Screen 3</Text>
      
      <Button
        title="Go to Menu"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
}
function Screen4Screen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Screen 4</Text>
      
      <Button
        title="Go to Menu"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
}
function Screen5Screen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Screen 5</Text>
      
      <Button
        title="Go to Menu"
        onPress={() => navigation.navigate('Menu')}
      />
    </View>
  );
}

const App=()=>{ 
  return(
<NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Screen1" component={Screen1Screen} />
        <Stack.Screen name="Screen2" component={Screen2Screen} />
        <Stack.Screen name="Screen3" component={Screen3Screen} />
        <Stack.Screen name="Screen4" component={Screen4Screen} />
        <Stack.Screen name="Screen5" component={Screen5Screen} />
      </Stack.Navigator>
    </NavigationContainer>
);

};
export default App;
