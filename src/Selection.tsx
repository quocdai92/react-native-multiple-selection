// components/Hello.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Badge, Icon } from 'react-native-elements';
import SelectionAutoComplete from './SelectionAutoComplete';

const initItem: Array<ISelectionItem> = []

const Selection: React.FC<ISelectionProps> = (props) => {
  const [selectedItems, setSelectedItems] = React.useState(props.setValues ? props.setValues : initItem);

  function _handleSelect(item: ISelectionItem) {
    if (!selectedItems.find(m => m.value == item.value)) {
      setSelectedItems([...selectedItems, item])
    }
  }

  function _handleRemoveItem(item: ISelectionItem) {
    let length = selectedItems.length;
    let idx = -1;
    for (let i = 0; i < length; i++) {
      if (item.value == selectedItems[i].value) {
        idx = i;
      }
    }
    selectedItems.splice(idx, 1)
    setSelectedItems([...selectedItems])
  }
  return (
    <View style={styles.root}>
      <View style={styles.selectedItems}>
        {
          selectedItems && selectedItems.length > 0 &&
          selectedItems.map((item, index) => (
            <View key={index}>
              <Badge value={<Text>{item.text}</Text>} containerStyle={{ padding: 5 }} badgeStyle={{ padding: 15 }} />
              <Icon name='closecircleo' type='antdesign' size={20} containerStyle={styles.itemClose} onPress={() => _handleRemoveItem(item)} />
            </View>
          ))
        }
      </View>
      <View style={styles.items}>
        <SelectionAutoComplete items={props.setItems} onChanged={_handleSelect} />
      </View>
    </View>
  );
}

export default Selection;
// styles
const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column'
  },
  selectedItems: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center'
  },
  items: {
    flex: 1,
  },
  itemClose: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#cdcdcd',
    width: 20,
    height: 20
  }
});