import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

class MainPageClass extends React.Component {
    handleButtonPress = () => {
		this.props.navigation.navigate('MyTrips');
		console.log('Button pressed!');
	}

	render() {
		return (
            <View>
                <Text>Home</Text>
                <Button title="Press me" onPress={this.handleButtonPress} />
            </View>
        );
	}
}

const MainPage = (props) => {
    const navigation = useNavigation();
    return <MainPageClass {...props} navigation={navigation} />;
};

export default MainPage;
