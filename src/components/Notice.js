import "./css/Notice.css";

function Notice ({NoticemodalToggle}) {
  return (
    <div className="notice">
      <div className="">
        <div className="LPtitle noticeTitlebox">
          <span className="noticeicon">icon3</span>
          <span className="noticeTitleContent">공지사항</span>
          <span className="noticeopenbtn" onClick={NoticemodalToggle}>▼</span>
        </div>
      </div>

      <div className="noticeList">
        <div className="noticeListbox">
          <div className="noticeNum">1305</div>
          <div className="noticeListContent">[업무알림 선별관제 시스템 정기점검 일정 안내</div>
          <div className="noticeTimestamp">2021.03.10</div>
        </div>
        <div className="noticeListbox">
          <div className="noticeNum">1304</div>
          <div className="noticeListContent">[업무알림 선별관제 시스템 정기점검 일정 안내</div>
          <div className="noticeTimestamp">2021.03.10</div>
        </div>
        <div className="noticeListbox">
          <div className="noticeNum">1303</div>
          <div className="noticeListContent">[업무알림 선별관제 시스템 정기점검 일정 안내</div>
          <div className="noticeTimestamp">2021.03.10</div>
        </div>
        <div className="noticeListbox">
          <div className="noticeNum">1302</div>
          <div className="noticeListContent">[업무알림 선별관제 시스템 정기점검 일정 안내</div>
          <div className="noticeTimestamp">2021.03.10</div>
        </div>
        <div className="noticeListbox">
          <div className="noticeNum">1301</div>
          <div className="noticeListContent">[업무알림 선별관제 시스템 정기점검 일정 안내</div>
          <div className="noticeTimestamp">2021.03.10</div>
        </div>
        <div className="noticeListbox">
          <div className="noticeNum">1300</div>
          <div className="noticeListContent">[업무알림 선별관제 시스템 정기점검 일정 안내</div>
          <div className="noticeTimestamp">2021.03.10</div>
        </div>

      </div>
    </div>
  )
}

export default Notice;