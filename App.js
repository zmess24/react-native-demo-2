import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
	  SearchScreen,
	  ResultsShowScreen
}, {
	initialRouteName: 'SearchScreen',
	defaultNavigationOptions: {
		title: 'Business Search'
	}
});

export default createAppContainer(navigator);
