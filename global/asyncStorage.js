import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value, name) => {
    console.log(value, name)
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(name, jsonValue);
    } catch (e) {
        console.log(e);
    }
};

export const getData = async (name) => {
    try {
        const jsonValue = await AsyncStorage.getItem(name);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log(e);
    }
}
