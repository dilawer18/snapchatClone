import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Routes from './src/Navigations/Routes';
import { setlogin } from './src/redux/actions/auth';
import store from './src/redux/store';
import { getData } from './src/utils/utils';


const App = () => {
  // useEffect(() => {
  //   (async () => {
  //     const userData = await getData()
  //     console.log("userData in App.js", userData);
  //     setlogin(userData)
  //   })();
  // }, [])

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

//import liraries
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import MyComponent from './src/Components/TestComp';

// // create a component
// const App = () => {






//   const onPrssBtn = (props) => {
//     console.log("onPrssBtnonPrssBtnonPrssBtn", props);
//   }


//   return (
//     <View style={styles.container}>

//       <MyComponent onPrssBtn={onPrssBtn} />
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
// });

// //make this component available to the app
// export default App;
