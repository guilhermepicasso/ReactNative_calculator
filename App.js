import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function App() {
  const [resultado, setResultado] = useState('');

  const pressionarBotao = (texto) => {
    if (texto === '=') {
      calcular();
    } else if (texto === 'C') {
      setResultado('');
    } else {
      setResultado(resultado + texto);
    }
  };

  const calcular = () => {
    const partes = resultado.split(/([+\-\*/])/);

    let valor = parseFloat(partes[0]);

    for (let i = 1; i < partes.length; i += 2) {
      const operador = partes[i];
      const proximoValor = parseFloat(partes[i + 1]);

      if (operador === '+') valor += proximoValor;
      else if (operador === '-') valor -= proximoValor;
      else if (operador === '*') valor *= proximoValor;
      else if (operador === '/') valor /= proximoValor;
    }

    setResultado(valor.toString());
  };

  return (
    <View style={styles.container}>
      <View style={styles.caixaResultado}>
        <Text style={styles.resultado}>{resultado}</Text>
      </View>
      <View style={styles.caixaBotao}>
        <View style={styles.linha}>
          <Button title="1" onPress={() => pressionarBotao('1')} />
          <Button title="2" onPress={() => pressionarBotao('2')} />
          <Button title="3" onPress={() => pressionarBotao('3')} />
          <Button title="+" onPress={() => pressionarBotao('+')} />
        </View>
        <View style={styles.linha}>
          <Button title="4" onPress={() => pressionarBotao('4')} />
          <Button title="5" onPress={() => pressionarBotao('5')} />
          <Button title="6" onPress={() => pressionarBotao('6')} />
          <Button title="-" onPress={() => pressionarBotao('-')} />
        </View>
        <View style={styles.linha}>
          <Button title="7" onPress={() => pressionarBotao('7')} />
          <Button title="8" onPress={() => pressionarBotao('8')} />
          <Button title="9" onPress={() => pressionarBotao('9')} />
          <Button title="*" onPress={() => pressionarBotao('*')} />
        </View>
        <View style={styles.linha}>
          <Button title="C" onPress={() => pressionarBotao('C')} />
          <Button title="0" onPress={() => pressionarBotao('0')} />
          <Button title="=" onPress={() => pressionarBotao('=')} />
          <Button title="/" onPress={() => pressionarBotao('/')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  caixaResultado: {
    flex: 2,
    backgroundColor: '#E3EDF0',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultado: {
    fontSize: 50,
    color: 'black',
  },
  caixaBotao: {
    flex: 7,
  },
  linha: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
