import React, { useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { removeUser } from "../../Redux/store/users";

export default function UserItem({
  _id,
  firstname,
  lastname,
  email,
  age,
  city,
  username,
}) {
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();

  const removeHandler = () => {
    swal({
      title: "آیا از حذف مطمئن هستید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then((result) => {
      if (result) {
        dispatch(removeUser(_id));

        swal({
          title: "کاربر مورد نظر با موفقیت حذف شد",
          icon: "success",
          button: "اوکی",
        });
      }
    });
  };

  return (
    <>
      <div
        className={`modal ${isShowModal ? "show-modal" : null}`}
        id="show-info-modal"
      >
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">جزئیات</h4>
              <button
                type="button"
                class="btn-close py-0"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div class="modal-body position-relative">
              <form action="#" class="form row mx-0">
                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-user form__icon icon-name-article"></span>
                  <input
                    type="text"
                    name=""
                    id="firstname"
                    value={`نام: ${firstname}`}
                    class="form-control form__input input-user-firstname"
                    readonly
                  />
                  <label for="firstname" class="form__label my-0">
                    نام{" "}
                  </label>
                </div>

                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-users form__icon"></span>
                  <input
                    type="text"
                    name=""
                    value={`نام خانوادگی: ${lastname}`}
                    id="lastname"
                    class="form-control form__input input-user-lastname"
                    readonly
                  />
                  <label for="lastname" class="form__label my-0">
                    نام خانوادگی
                  </label>
                </div>

                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-user form__icon"></span>
                  <input
                    lang="en"
                    type="text"
                    name=""
                    value={`نام کاربری: ${username}`}
                    id="username"
                    class="form-control form__input input-user-username"
                    readonly
                  />
                  <label for="username" class="form__label my-0">
                    نام کاربری
                  </label>
                </div>

                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-globe form__icon"></span>
                  <input
                    lang="en"
                    type="email"
                    name=""
                    value={`ایمیل: ${email}`}
                    id="email"
                    class="form-control form__input input-user-email"
                    readonly
                  />
                  <label for="email" class="form__label my-0" lang="en">
                    ایمیل
                  </label>
                </div>

                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-key form__icon"></span>
                  <input
                    type="text"
                    name=""
                    id="text"
                    value={`شهر: ${city}`}
                    class="form-control form__input input-user-password"
                    readonly
                  />
                  <label for="password" class="form__label my-0">
                    {" "}
                    شهر
                  </label>
                </div>
                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-wallet form__icon"></span>
                  <input
                    type="text"
                    name=""
                    value={`سن: ${age}`}
                    id="count-product"
                    class="form-control form__input input-user-product"
                    readonly
                  />
                  <label for="count-product" class="form__label my-0">
                    سن
                  </label>
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button
                class="btn btn-danger btn-lg"
                data-bs-dismiss="modal"
                onClick={() => setIsShowModal(false)}
              >
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="uesrs__item">
        <div className="users__info">
          <img
            src="../../img/admin/profile/banana.png"
            alt="photo user"
            className="users__img"
          />
          <div className="users__details">
            <p className="users__name my-0">
              {firstname} {lastname}
            </p>
            <p lang="en" className="users__email">
              {email}
            </p>
          </div>
        </div>
        <div className="users__btns">
          <button className="btn-custome btn-custome--gray">پیام ها</button>
          <button
            className="btn-custome btn-custome__blue"
            onClick={() => setIsShowModal(true)}
          >
            جزئیات
          </button>
          <button
            className="btn-custome btn-custome__red"
            onClick={removeHandler}
          >
            حذف
          </button>
        </div>
      </div>
    </>
  );
}
