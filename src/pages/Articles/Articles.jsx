import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ArticleBox from "./../../components/ArticleBox/ArticleBox";

import "./Articles.css";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesFromServer } from "../../Redux/store/articles";

export default function Articles() {
  const articles = useSelector((state) => state.articles);
  const dispath = useDispatch();
  console.log("articles", articles);

  useEffect(() => {
    dispath(
      getArticlesFromServer("https://redux-cms.iran.liara.run/api/articles")
    );
  }, []);

  return (
    <div className="col-8 content px-0">
      <div className="content__wrapper d-flex flex-column align-content-between">
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

        <div className="articles">
          <div className="articles__list">
            {articles.map((article) => (
              <ArticleBox key={article._id} {...article} />
            ))}
          </div>
        </div>

        <div className="new-article">
          <button
            className="btn-custome btn-custome__blue"
            data-bs-toggle="modal"
            data-bs-target="#new-article"
            id="btn-modal-new-article"
          >
            افزودن مقاله جدید
          </button>
        </div>
      </div>
    </div>
  );
}
