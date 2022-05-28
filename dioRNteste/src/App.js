import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorGitName = '#C9D1D9';
const colorGitDark = '#4F565E';

const imageProfile = 'https://avatars.githubusercontent.com/u/22249079?v=4';

const urlToMyGithub = 'https://github.com/luisff2016';

const App = () => {
  const handlePressGoToGitHub = async () => {
    console.log('verificando link ...');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      console.log('abrindo github ...');
      await Linking.openURL(urlToMyGithub);
      console.log('github carregado ...');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Foto perfil"
          style={style.avatar}
          source={{uri: imageProfile}}
        />
        <Text
          accessibilityLabel="Nome: Luis Fernando"
          style={[style.defaultText, style.name]}>
          Luis Fernando
        </Text>
        <Text
          accessibilityLabel="Nickname: luisff2016"
          style={[style.defaultText, style.nickname]}>
          luisff2016
        </Text>
        <Text
          accessibilityLabel="Descrição: Graduando de Ciencias da Computação na UFS"
          style={[style.defaultText, style.description]}>
          Graduando de Ciencias da Computação na UFS
        </Text>
        <Pressable onPress={handlePressGoToGitHub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorGitName,
  },
  name: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 18,
    color: colorGitDark,
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    margin: 20,
    backgroundColor: colorGitDark,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

/**
 * DICAS
 * CTRL+M para abrir o DevMenu
 */
