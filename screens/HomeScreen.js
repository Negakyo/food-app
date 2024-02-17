import React from 'react'
import * as Text from '../components/atoms/text/index';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text.Small content="HomeScreen" />
    </SafeAreaView>
  )
}