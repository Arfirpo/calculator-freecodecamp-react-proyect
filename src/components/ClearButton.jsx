import '../css/ClearButton.css'

export const ClearButton = (props) => {
  return (
    <div 
      className="clear-button"
      onClick={props.handleClear}>
      {props.children}
    </div>
  )
}