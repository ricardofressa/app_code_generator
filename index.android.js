var React = require('react');
var Text = require('react-native').Text;
var AppRegistry = require('react-native').AppRegistry;

const App = () => {
  
  return (
      <Text> Meu primeiro APP.</Text>
    );
};

AppRegistry.registerComponent('app_code_generator', () => App);