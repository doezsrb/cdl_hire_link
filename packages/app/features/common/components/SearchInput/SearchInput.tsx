import { TextInput, View } from 'dripsy'

const SearchInput = ({
  search,
  setSearch,
}: {
  search: string
  setSearch: Function
}) => {
  return (
    <TextInput
      placeholder="Search"
      sx={{
        width: 200,
        paddingHorizontal: 5,
        borderRadius: 10,
        borderWidth: 2,
        height: '100%',
        borderStyle: 'solid',
        color: 'primary',
        borderColor: 'primary',
      }}
      value={search}
      onChangeText={(text: string) => setSearch(text)}
      inputMode={undefined}
      onPressIn={undefined}
      onPressOut={undefined}
      id={undefined}
      href={undefined}
      hrefAttrs={undefined}
      onClick={undefined}
      onPointerEnter={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeave={undefined}
      onPointerLeaveCapture={undefined}
      onPointerMove={undefined}
      onPointerMoveCapture={undefined}
      onPointerCancel={undefined}
      onPointerCancelCapture={undefined}
      onPointerDown={undefined}
      onPointerDownCapture={undefined}
      onPointerUp={undefined}
      onPointerUpCapture={undefined}
      aria-label={undefined}
      aria-busy={undefined}
      aria-checked={undefined}
      aria-disabled={undefined}
      aria-expanded={undefined}
      aria-selected={undefined}
      aria-labelledby={undefined}
      aria-valuemax={undefined}
      aria-valuemin={undefined}
      aria-valuenow={undefined}
      aria-valuetext={undefined}
      aria-hidden={undefined}
      aria-live={undefined}
      aria-modal={undefined}
      role={undefined}
      accessibilityLabelledBy={undefined}
      accessibilityLanguage={undefined}
      autoComplete={undefined}
      cursorColor={undefined}
      verticalAlign={undefined}
    />
  )
}

export default SearchInput
