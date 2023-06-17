import { Button, SafeAreaView, Text, TextInput, View } from "react-native";
import { StyleSheet } from 'react-native';


export default function Login({navigation}){
    return (
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input}
            placeholder="Log-in..."/>
            <TextInput style={styles.input}
            placeholder="Senha..."/>
            <Text style={styles.link}
                onPress={() => navigation.navigate('MudarSenha')}>
                Alterar senha
            </Text>
            <View style={styles.btnDefault}>
                <Button
                title="Entrar"
                onPress={() => navigation.navigate("Catalogo")}/>
            </View>
            <View style={styles.btnDefault}>
                <Button
                title="Se cadastrar"
                onPress={() => navigation.navigate("Registro")}/>
            </View>
 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAF9F6',
    },
    input: {
        width: 250,
        marginTop: 40,
        padding: 10,
        fontSize: 18,
        color: 'black',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black'
    },
    link: {
        color: 'blue',

    },
    btnDefault: {
        width: 250,
        marginTop: 40,
        borderWidth: 2,
    }
  });