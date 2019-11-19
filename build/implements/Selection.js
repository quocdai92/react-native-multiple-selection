var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// components/Hello.tsx
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Badge, Icon } from 'react-native-elements';
import SelectionAutoComplete from './SelectionAutoComplete';
var initItem = [];
var Selection = function (props) {
    var _a = React.useState(props.setValues ? props.setValues : initItem), selectedItems = _a[0], setSelectedItems = _a[1];
    function _handleSelect(item) {
        if (selectedItems && !selectedItems.find(function (m) { return m.value == item.value; })) {
            setSelectedItems(__spreadArrays(selectedItems, [item]));
        }
    }
    function _handleRemoveItem(item) {
        var length = selectedItems.length;
        var idx = -1;
        for (var i = 0; i < length; i++) {
            if (item.value == selectedItems[i].value) {
                idx = i;
            }
        }
        selectedItems.splice(idx, 1);
        setSelectedItems(__spreadArrays(selectedItems));
    }
    return (React.createElement(View, { style: styles.root },
        React.createElement(View, { style: styles.selectedItems }, selectedItems && selectedItems.length > 0 &&
            selectedItems.map(function (item, index) { return (React.createElement(View, { key: index },
                React.createElement(Badge, { value: React.createElement(Text, null, item.text), containerStyle: { padding: 5 }, badgeStyle: { padding: 15 } }),
                React.createElement(Icon, { name: 'closecircleo', type: 'antdesign', size: 20, containerStyle: styles.itemClose, onPress: function () { return _handleRemoveItem(item); } }))); })),
        React.createElement(View, { style: styles.items },
            React.createElement(SelectionAutoComplete, { items: props.setItems, onChanged: _handleSelect }))));
};
export default Selection;
// styles
var styles = StyleSheet.create({
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
//# sourceMappingURL=Selection.js.map