/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeh, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { selectorForm } from '../../redux/formBuilder';

const FormView = () => {
  const formData = useSelector(selectorForm);
  const { register, errors } = useForm();
  const history = useHistory();
  const goToHome = () => history.push('/');
  const inputPattern = (type) => {
    switch (type) {
      case 'email':
        return {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i,
          message: 'Invalid Email Address',
        };
      case 'number':
        return {
          value: /^[0-9]*$/i,
          message: 'Must only contain number',
        };
      default:
        break;
    }
  };
  return (
    <div className="flex-col w-full bg-dark-300 h-screen">
      <div className="px-8 pt-8">
        <div className="flex px-4 py-2 bg-yellow-500 rounded-full items-center">
          <button className="mx-2 lg:hidden" type="button" onClick={() => goToHome()}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-dark-500"
            />
          </button>
          <span className="flex-none text-2xl text-dark-500 font-bold italic">Form View</span>
        </div>
      </div>
      {!isEmpty(formData) && (
        <form className="py-4 overflow-y-scroll max-h-90 no-scroll-bar">
          {formData.map((field) => (
            // eslint-disable-next-line react/jsx-key
            <div
              key={field.label}
              className="flex flex-col lg:items-start px-8 py-4"
            >

              {field.fieldType === 'boolean' && (
                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <span className="text-sm md:text-2xl font-bold text-yellow-500">{field.label}</span>
                  <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                  <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" />
                </div>
              )}
              {field.fieldType === 'checkbox' && (
                <label className="flex justify-start items-center">
                  <div className="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                    <input
                      type="checkbox"
                      name="checks"
                      className="opacity-0 absolute"
                      ref={register()}
                    />
                    <svg className="fill-current hidden w-4 h-4 text-green-500 pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                  </div>
                  <div className="text-sm md:text-2xl font-bold text-yellow-500">{field.label}</div>
                </label>
              )}
              {field.fieldType !== 'boolean' && field.fieldType !== 'checkbox' && (
                <div className="flex flex-col w-full">
                  <span className="text-sm md:text-2xl font-bold text-yellow-500">{field.label}</span>
                  <input
                    className="p-2 rounded tracking-wide bg-gray-200 w-full"
                    name={field.label}
                    placeholder={field.fieldType}
                    type={field.fieldType}
                    ref={register({
                      required: 'input required',
                      pattern: inputPattern(field.fieldType),
                    })}
                  />
                </div>
              )}
              <div className="text-red-400 text-sm italic">
                {errors.label && errors.label.message}
              </div>
            </div>
          ))}
        </form>
      )}
      {isEmpty(formData) && (
        <div className="flex flex-row items-center justify-center h-3/5-vh">
          <FontAwesomeIcon
            icon={faMeh}
            size="3x"
            className="text-grey-400"
          />
          <div className="px-4 font-medium text-grey-400 italic">
            <p>List is empty</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormView;
