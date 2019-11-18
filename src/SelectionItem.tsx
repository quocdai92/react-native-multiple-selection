import React from 'react';
import { View, Text } from 'react-native';
import { Badge, Icon } from 'react-native-elements'

const SelectionItem: React.FC<ISelectionItem> = (props) => {
    return (
        <View>
            <Badge status="primary" value={<Text>{props.text}</Text>} />
        </View>
    );
}
export default SelectionItem;