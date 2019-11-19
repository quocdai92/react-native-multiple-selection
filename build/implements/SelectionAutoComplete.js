var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';
var initState = [];
var SelectionAutoComplete = function (props) {
    var _a = React.useState(initState), availableItems = _a[0], setAvailableItems = _a[1];
    function _handleChangedText(text) {
        var t = text.trim().toLowerCase();
        var arr = t.split(' ');
        var items = props.items;
        if (t == '') {
            setAvailableItems(__spreadArrays(initState));
        }
        else {
            var _loop_1 = function (i) {
                var element = arr[i];
                items = items.filter(function (m) { return m.text.toLowerCase().indexOf(element) >= 0; });
            };
            for (var i = 0; i < arr.length; i++) {
                _loop_1(i);
            }
            items = items.slice(0, 10);
            setAvailableItems(__spreadArrays(items));
        }
    }
    function _handleSelectItem(item) {
        props.onChanged(item);
    }
    return (React.createElement(View, { style: { flex: 1, position: 'relative', height: 200 } },
        React.createElement(Input, { placeholder: 'Enter text here...', onChangeText: function (text) { return _handleChangedText(text); } }),
        React.createElement(ScrollView, { style: styles.dropdown, contentContainerStyle: { flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' } }, availableItems && availableItems.length > 0 ? availableItems.map(function (item, idx) { return (React.createElement(Button, { key: idx, title: item.text, type: "outline", onPress: function () { _handleSelectItem(item); } })); })
            :
                React.createElement(Button, { title: 'No records!', type: "outline", disabled: true }))));
};
var styles = StyleSheet.create({
    dropdown: {
        flex: 1,
        flexDirection: 'column',
        zIndex: 999,
    }
});
export default SelectionAutoComplete;
//# sourceMappingURL=SelectionAutoComplete.js.map