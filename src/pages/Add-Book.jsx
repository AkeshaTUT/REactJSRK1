import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function AddBook({ books, setBooks }) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      genre: "",
      rating: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(2, "Минимум 2 символа")
        .required("Обязательно"),
      author: Yup.string().required("Обязательно"),
      genre: Yup.string()
        .oneOf(["fiction", "nonfiction", "tech"], "Выберите один из вариантов")
        .required("Обязательно"),
      rating: Yup.number()
        .min(0, "Минимум 0")
        .max(5, "Максимум 5")
        .required("Обязательно"),
    }),
    onSubmit: (values) => {
      const newBook = {
        id: Date.now(),
        ...values,
      };

      setBooks([...books, newBook]);
      navigate("/books");
    },
  });

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <h2>Добавить книгу</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Название:</label>
          <input
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.errors.title && (
            <div style={{ color: "red" }}>{formik.errors.title}</div>
          )}
        </div>

        <div>
          <label>Автор:</label>
          <input
            type="text"
            name="author"
            value={formik.values.author}
            onChange={formik.handleChange}
          />
          {formik.errors.author && (
            <div style={{ color: "red" }}>{formik.errors.author}</div>
          )}
        </div>

        <div>
          <label>Жанр:</label>
          <select
            name="genre"
            value={formik.values.genre}
            onChange={formik.handleChange}
          >
            <option value="">Выберите жанр</option>
            <option value="fiction">Fiction</option>
            <option value="nonfiction">Nonfiction</option>
            <option value="tech">Tech</option>
          </select>
          {formik.errors.genre && (
            <div style={{ color: "red" }}>{formik.errors.genre}</div>
          )}
        </div>

        <div>
          <label>Рейтинг (0–5):</label>
          <input
            type="number"
            step="0.1"
            name="rating"
            value={formik.values.rating}
            onChange={formik.handleChange}
          />
          {formik.errors.rating && (
            <div style={{ color: "red" }}>{formik.errors.rating}</div>
          )}
        </div>

        <button type="submit" style={{ marginTop: 10 }}>
          Добавить книгу
        </button>
      </form>
    </div>
  );
}
