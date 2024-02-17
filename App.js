import Navigation from './navigation';
import { useFonts } from 'expo-font';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
  });
  if (!fontsLoaded){
    return (
      console.log('Chargement des polices')
    );
  }

  return (
    <>
      <Navigation />
    </>
  );
}
