import "./css/Noticeclose.css";

function Noticeclose({NoticemodalToggle}) {
  return (
    <div className="noticeclose">
      <div className="LPtitle noticeTitlebox">
        <span className="noticeicon">icon3</span>
        <span className="noticeTitleContent">공지사항</span>
        <span className="noticeopenbtn" onClick={NoticemodalToggle}>▲</span>
      </div>
    </div>
  )
}

export default Noticeclose;