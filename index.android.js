var React = require('react');
var Text = require('react-native').Text;
var View = require('react-native').View;
var Button = require('react-native').Button;
var AppRegistry = require('react-native').AppRegistry;

const generateRandomNumbers = () => {
  var random_number = Math.random();
  random_number = Math.floor(random_number * 10);
  alert(random_number);
}

const App = () => {
  return (
      <View>
        <Text> Gerador de números randômicos </Text>
        <Button
          title="Gerar Número"
          onPress={generateRandomNumbers} 
        />
      </View>

    );
};

AppRegistry.registerComponent('app_code_generator', () => App);