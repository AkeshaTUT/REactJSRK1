import React from 'react';
import { Formik, Form, Field } from 'formik';
import './CourseApplicationForm.css';

const CourseApplicationForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    phone: '',
    course: '',
    gender: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    education: '',
  };

  const validate = (values) => {
    const errors = {};

    // Full name validation
    if (!values.fullName) {
      errors.fullName = 'Full name is required';
    }

    // Email validation
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    // Password validation
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    // Course validation
    if (!values.course) {
      errors.course = 'Please select a course';
    }

    // Gender validation
    if (!values.gender) {
      errors.gender = 'Please select gender';
    }

    // Date of birth validation
    if (!values.dateOfBirth) {
      errors.dateOfBirth = 'Date of birth is required';
    }

    // City validation
    if (!values.city) {
      errors.city = 'City is required';
    }

    // Country validation
    if (!values.country) {
      errors.country = 'Country is required';
    }

    return errors;
  };

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Course Application</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name *
              </label>
              <Field
                type="text"
                id="fullName"
                name="fullName"
                className="form-input"
                placeholder="Enter your full name"
              />
              {errors.fullName && touched.fullName && (
                <div className="error-message">{errors.fullName}</div>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
              />
              {errors.email && touched.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password *
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
              />
              {errors.password && touched.password && (
                <div className="error-message">{errors.password}</div>
              )}
            </div>

            {/* Phone (optional) */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <Field
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Course (required) */}
            <div className="form-group">
              <label className="form-label">Course *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <Field type="radio" name="course" value="Course A" />
                  Course A
                </label>
                <label className="radio-label">
                  <Field type="radio" name="course" value="Course B" />
                  Course B
                </label>
                <label className="radio-label">
                  <Field type="radio" name="course" value="Course C" />
                  Course C
                </label>
              </div>
              {errors.course && touched.course && (
                <div className="error-message">{errors.course}</div>
              )}
            </div>

            {/* Gender (required) */}
            <div className="form-group">
              <label className="form-label">Gender *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <Field type="radio" name="gender" value="Male" />
                  Male
                </label>
                <label className="radio-label">
                  <Field type="radio" name="gender" value="Female" />
                  Female
                </label>
              </div>
              {errors.gender && touched.gender && (
                <div className="error-message">{errors.gender}</div>
              )}
            </div>

            {/* Date of Birth */}
            <div className="form-group">
              <label htmlFor="dateOfBirth" className="form-label">
                Date of Birth *
              </label>
              <Field
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="form-input"
              />
              {errors.dateOfBirth && touched.dateOfBirth && (
                <div className="error-message">{errors.dateOfBirth}</div>
              )}
            </div>

            {/* Address (optional) */}
            <div className="form-group">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <Field
                as="textarea"
                id="address"
                name="address"
                className="form-textarea"
                placeholder="Enter your address"
              />
            </div>

            {/* City */}
            <div className="form-group">
              <label htmlFor="city" className="form-label">
                City *
              </label>
              <Field
                type="text"
                id="city"
                name="city"
                className="form-input"
                placeholder="Enter your city"
              />
              {errors.city && touched.city && (
                <div className="error-message">{errors.city}</div>
              )}
            </div>

            {/* State (optional) */}
            <div className="form-group">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <Field
                type="text"
                id="state"
                name="state"
                className="form-input"
                placeholder="Enter your state"
              />
            </div>

            {/* Zip Code (optional) */}
            <div className="form-group">
              <label htmlFor="zipCode" className="form-label">
                Zip Code
              </label>
              <Field
                type="text"
                id="zipCode"
                name="zipCode"
                className="form-input"
                placeholder="Enter your zip code"
              />
            </div>

            {/* Country */}
            <div className="form-group">
              <label htmlFor="country" className="form-label">
                Country *
              </label>
              <Field as="select" id="country" name="country" className="form-select">
                <option value="">Select a country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="India">India</option>
                <option value="China">China</option>
                <option value="Japan">Japan</option>
                <option value="Other">Other</option>
              </Field>
              {errors.country && touched.country && (
                <div className="error-message">{errors.country}</div>
              )}
            </div>

            {/* Education (optional) */}
            <div className="form-group">
              <label htmlFor="education" className="form-label">
                Education
              </label>
              <Field as="select" id="education" name="education" className="form-select">
                <option value="">Select education level</option>
                <option value="School">School</option>
                <option value="College">College</option>
                <option value="University">University</option>
              </Field>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-button">
              Submit Application
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CourseApplicationForm;
