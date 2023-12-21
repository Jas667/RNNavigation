import { View, Text, Button } from 'react-native';

const SettingsScreen = ({navigation}) => { 
      return ( 
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
                  <Text>Settings Screen</Text> 
                  <Button title="Dashbord" onPress={() => navigation.jumpTo("Dashboard")} />
      </View> 
      );
};

export default SettingsScreen;