import "./css/Tempbar.css"

function Tempbar() {
  return (
    <div className="tempbar">
      <div className="tmpcolorbar"></div>
      <div className="tmprange">
        <span>COLD</span>
        <span>HOT</span>
      </div>
    </div>
  )
}

export default Tempbar;