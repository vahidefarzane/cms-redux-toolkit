import React from "react";

export default function Sidebar() {
  return (
    <div className="col-10 col-md-3 sidebar mx-auto mx-md-0 px-0">
      <div className="sidebar-content">
        <div className="card position-relative text-center">
          <img
            className="card-img-top sidebar__img-banner"
            src="../../img/admin/banner/banner.png"
            alt="banner admin photo"
          />
          <div className="card-body">
            <h4 className="card-title sidebar__top-name">محمدامین سعیدی راد</h4>
            <p className="card-text sidebar__top-email" lang="en">
              توسعه دهنده جاوا اسکریپت
            </p>
            <ul className="list px-0">
              <li className="list__item">
                <span className="fa fa-text-height"></span>
                <p className="list__text mb-0">
                  <span className="">نام کوچک</span>
                  <span className="list__firstname">محمدامین</span>
                </p>
              </li>
              <li className="list__item">
                <span className="fa fa-text-width"></span>

                <p className="list__text mb-0">
                  <span className="">نام خانوادگی</span>
                  <span className="list__lastname">سعیدی راد</span>
                </p>
              </li>
              <li className="list__item">
                <span className="fa fa-wallet"></span>

                <p className="list__text mb-0">
                  <span className="">تعداد دوره</span>
                  <span className="list__course-count">35</span>
                </p>
              </li>
            </ul>
            <button className="btn-custome btn-custome__blue btn-sidebar w-100">
              تغییر اطلاعات
              <span className="fa fa-pencil"></span>
            </button>
          </div>

          <div className="sidebar__profile">
            <img
              src="../../img/admin/profile/banana.png"
              alt="admin photo"
              className="sidebar__img-profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
