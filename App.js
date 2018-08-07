import React from 'react';
import { 
  StyleSheet,
  Text, 
  View, 
  Switch, 
  TextInput,
  TouchableOpacity
 } from 'react-native';


export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {altura:0, massa:0, resultado:0, resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.barrasSuperior}>
          <Text style={styles.resultado}>Barras superiores</Text>
          <TouchableOpacity style={styles.barraPequena}><Text style={styles.buttonText}>Esquerda</Text></TouchableOpacity>
          <TouchableOpacity style={styles.barraPequena}><Text style={styles.buttonText}>Todos</Text></TouchableOpacity>
          <TouchableOpacity style={styles.barraPequena}><Text style={styles.buttonText}>Direita</Text></TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize:35}]}>{this.state.resultadoText}</Text>
      
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input:{
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    marginTop:24,
  },
  barrasSuperior:{
    flexDirection:"row"
  },
  button:{
    backgroundColor:"#FCC302",
  },
  buttonText:{
    alignSelf:"center",
    padding: 30,
    fontSize:25,
    color:"#000"
  },
  resultado:{
    alignSelf:"center",
    color:"lightgray",
    fontSize:65,
    padding:15
  },
  barraPequena:{
    alignSelf:"center",
    color:"lightgray",
    fontSize:65,
    padding:15,
    width:"33%"
  }
});
