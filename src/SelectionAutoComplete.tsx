import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Icon, Input } from 'react-native-elements'

const initState: Array<ISelectionItem> = []
const SelectionAutoComplete: React.FC<ISelectionAutoCompleteProps> = (props) => {
    const [availableItems, setAvailableItems] = React.useState(initState)

    function _handleChangedText(text: string) {
        let t = text.trim().toLowerCase();
        let arr = t.split(' ');
        let items = props.items;
        if (t == '') {
            setAvailableItems([...initState]);
        }
        else {
            for (let i = 0; i < arr.length; i++) {
                const element = arr[i];
                items = items.filter(m => m.text.toLowerCase().indexOf(element) >= 0);
            }
            items = items.slice(0, 10);
            setAvailableItems([...items])
        }
    }

    function _handleSelectItem(item: ISelectionItem) {
        props.onChanged(item)
    }
    return (
        <View style={{ flex: 1, position: 'relative', height: 200 }}>
            <Input placeholder='Enter text here...' onChangeText={(text) => _handleChangedText(text)} />
            <ScrollView style={styles.dropdown}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }}
            >
                {
                    availableItems && availableItems.length > 0 ? availableItems.map((item, idx) => (
                        <Button key={idx}
                            title={item.text}
                            type="outline"
                            onPress={() => { _handleSelectItem(item) }}
                        />
                    ))
                        :
                        <Button
                            title='No records!'
                            type="outline"
                            disabled
                        />
                }
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    dropdown: {
        flex: 1,
        flexDirection: 'column',
        zIndex: 999,
    }
})
export default SelectionAutoComplete;