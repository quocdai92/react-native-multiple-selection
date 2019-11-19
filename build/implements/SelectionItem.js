import * as React from 'react';
import { View, Text } from 'react-native';
import { Badge } from 'react-native-elements';
var SelectionItem = function (props) {
    return (React.createElement(View, null,
        React.createElement(Badge, { status: "primary", value: React.createElement(Text, null, props.text) })));
};
export default SelectionItem;
//# sourceMappingURL=SelectionItem.js.map