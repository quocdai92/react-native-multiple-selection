
interface IOnChangedFunc {
    (selectedItem: Array<ISelectionItem>): void
}
interface ISelectionItem {
    value: string,
    text: string
}

interface ISelectionProps {
    setValues?: Array<ISelectionItem>,
    setItems: Array<ISelectionItem>,

    onChanged: IOnChangedFunc
}

/**
 * Props autocomplete selection.
 */
interface ISelectionAutoCompleteProps{
    items: Array<ISelectionItem>,
    onChanged: IOnSelectedItemFunc
}
interface IOnSelectedItemFunc {
    (selectedItem: ISelectionItem): void
}