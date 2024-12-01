interface Props {
  label: string
  onClick: () => void
  isToggled: boolean
  classes?: Record<string, boolean>
}

export const ToggleButton = (props: Props) => {
  const classList = () => ({
    ...props.classes,
    button: true,
    toggled: props.isToggled,
  })
  return (
    <button classList={classList()} onClick={props.onClick}>
      {props.label}
    </button>
  )
}
