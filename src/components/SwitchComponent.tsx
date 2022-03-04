import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { colores } from '../theme/appTheme';

export const SwitchComponent = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
      <View style={styles.container}>
        <Switch
          trackColor={{ false: colores.inactive, true: colores.active }}
          thumbColor={"#5856D6"}
        //   ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  });
