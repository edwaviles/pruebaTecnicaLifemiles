import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

export const AlertCustom = () => {
    const createTwoButtonAlert = () =>
    Alert.alert(
      "Titulo grande",
      "Text o descripcion",
      [
        {
          text: "cancelar",
          onPress: () => console.log("Cancelado"),
          style: "cancel"
        },
        { text: "Proceder", onPress: () => console.log("click en proceder") }
      ]
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  return (
    <View style={styles.container}>
      <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
      <Button title={"3-Button Alert"} onPress={createThreeButtonAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor:"red"
    }
});