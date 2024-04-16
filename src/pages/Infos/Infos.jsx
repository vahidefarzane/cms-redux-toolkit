import React from "react";
import { Link } from "react-router-dom";

import "./Infos.css";

export default function Infos() {
  return (
    <div className="col-8 content px-0">
      <div className="content__wrapper">
        <ul className="content__tabs">
          <li className="content__tab">
            <Link to="/users" className="content__tab-link">
              <span className="fa fa-user"></span>
              کاربران
            </Link>
          </li>
          <li className="content__tab">
            <Link to="/infos" className="content__tab-link">
              <span className="fa fa-book"></span>
              اطلاعات
            </Link>
          </li>
          <li className="content__tab">
            <Link to="/courses" className="content__tab-link">
              <span className="fa fa-store"></span>
              دوره‌ها
            </Link>
          </li>

          <li className="content__tab">
            <Link to="/articles" className="content__tab-link">
              <span className="fa fa-newspaper"></span>
              وبلاگ
            </Link>
          </li>
        </ul>
        <div className="active"></div>

        <div className="information">
          <div id="accordion">
            <div className="card">
              <div className="card-header">
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collapseOne"
                >
                  اطلاعات شما
                </a>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                data-bs-parent="#accordion"
              >
                <div className="card-body information-current-admin-wrapper-form p-4">
                  <form action="#" className="form row mx-0">
                    <div className="form__box-input col-6 px-2">
                      <span className="fa fa-user form__icon"></span>
                      <input
                        type="text"
                        name=""
                        value=""
                        id="firstname"
                        placeholder="نام "
                        className="form-control form__input"
                        required
                      />
                      <label for="firstname" className="form__label my-0">
                        نام
                      </label>
                    </div>

                    <div className="form__box-input col-6 px-2">
                      <span className="fa fa-users form__icon"></span>

                      <input
                        type="text"
                        name=""
                        value=""
                        id="lastname"
                        placeholder="نام خانوادگی"
                        className="form-control form__input"
                        required
                      />
                      <label for="lastname" className="form__label my-0">
                        نام خانوادگی
                      </label>
                    </div>

                    <div className="form__box-input col-6 px-2">
                      <span className="fa fa-address-book form__icon"></span>

                      <input
                        lang="en"
                        type="text"
                        name=""
                        value=""
                        id="username"
                        placeholder="نام کاربری"
                        className="form-control form__input"
                        required
                      />
                      <label for="username" className="form__label my-0">
                        نام کاربری
                      </label>
                    </div>

                    <div className="form__box-input col-6 px-2">
                      <span className="fa fa-globe form__icon"></span>

                      <input
                        lang="en"
                        type="email"
                        name=""
                        value=""
                        id="email"
                        placeholder="email "
                        className="form-control form__input"
                        required
                      />
                      <label for="email" className="form__label my-0" lang="en">
                        ایمیل
                      </label>
                    </div>

                    <div className="form__box-input col-4 px-2">
                      <span className="fa fa-key form__icon"></span>

                      <input
                        type="password"
                        name=""
                        id="password"
                        placeholder="رمز جاری"
                        className="form-control form__input"
                        required
                      />
                      <label for="password" className="form__label my-0">
                        رمز جاری
                      </label>
                      <span className="fa fa-key form__icon"></span>
                    </div>
                    <div className="form__box-input col-4 px-2">
                      <span className="fa fa-key form__icon"></span>

                      <input
                        type="password"
                        name=""
                        id="password"
                        placeholder="رمز  جدید"
                        className="form-control form__input"
                        required
                      />
                      <label for="password" className="form__label my-0">
                        رمز جدید
                      </label>
                      <span className="fa fa-key form__icon"></span>
                    </div>
                    <div className="form__box-input col-4 px-2">
                      <input
                        type="password"
                        name=""
                        id="password"
                        placeholder="تکرار رمز"
                        className="form-control form__input"
                        required
                      />
                      <label for="password" className="form__label my-0">
                        تکرار رمز
                      </label>
                      <span className="fa fa-key form__icon"></span>
                    </div>

                    <div className="change-profile-box px-0 d-flex gap-4 mb-4">
                      <div className="change-profile-input-box">
                        <img
                          src="../../img/admin/profile/banana.png"
                          className="change-profile-pic"
                          alt=""
                        />
                        <label
                          for="upload-profile-input"
                          className="upload-profile-input-label"
                        >
                          <input
                            type="file"
                            id="upload-profile-input"
                            name=""
                          />
                        </label>
                      </div>

                      <div className="change-banner-input-box">
                        <img
                          src="../../img/admin/banner/banner.png"
                          className="change-banner-pic"
                          alt=""
                        />
                        <label
                          for="upload-banner-input"
                          className="upload-banner-input-label"
                        >
                          <input type="file" id="upload-banner-input" name="" />
                        </label>
                      </div>
                    </div>

                    <button className="btn-custome btn-custome__blue col-6 mb-3">
                      اپدیت اطلاعات
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <a
                  className="collapsed btn information__team-title"
                  data-bs-toggle="collapse"
                  href="#collapseTwo"
                >
                  اطلاعات تیم
                </a>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                data-bs-parent="#accordion"
              >
                <div className="row justify-content-center mx-0 p-4">
                  <div className="infromation-team-container">
                    <div className="infromation-team-cards d-flex flex-wrap">
                      <div className="card col-4 information__team-card p-2">
                        <img
                          className="card-img-top information__admin-img"
                          src="../../img/store/avaters/avatar2.png"
                          alt="admin photo"
                        />
                        <div className="card-body d-flex flex-column justify-content-between p-4">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h4 className="card-title information__admin-name my-0">
                              عرشیا احسنی
                            </h4>
                            <p className="card-text information__admin-role my-0">
                              باغدار
                            </p>
                          </div>
                          <div className="mt-4 d-flex justify-content-end gap-2">
                            <button className="btn btn-lg btn-danger">
                              حذف
                            </button>
                            <button className="btn btn-lg btn-info">
                              ویرایش
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn-custome btn-custome__red col-10 mt-4"
                    data-bs-toggle="modal"
                    data-bs-target="#new-member"
                  >
                    افزودن فرد جدید
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
