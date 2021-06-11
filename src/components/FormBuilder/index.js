/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMeh } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import { useHistory } from 'react-router-dom';
import { selectorForm, addForm, removeForm } from '../../redux/formBuilder/index.js';
import ListCard from '../Card/ListCard';
import FormView from '../FormView';

const FormBuilder = () => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  const formDataSelector = useSelector(selectorForm);
  const history = useHistory();
  const goToFormView = () => history.push('/form');
  const onSubmit = (values, e) => {
    dispatch(addForm(values));
    e.target.reset();
  };
  const removeField = (id) => {
    console.log(id);
    const index = formDataSelector.findIndex((fd) => fd.id === id);
    console.log(index);
    dispatch(removeForm(index));
  };

  return (
    <div className="flex bg-yellow-500 flex-col lg:flex-row w-full h-screen">
      <div className="flex flex-col lg:w-1/2">
        <div className="px-8 pt-8">
          <div className="px-4 py-2 bg-dark-500 rounded-full">
            <span className="flex-none text-2xl text-yellow-500 font-bold italic">FormBuilder.io</span>
          </div>
        </div>
        <div className="p-8 divide-y divide-grey-200">
          <form
            className="flex flex-col w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-row w-full">
              <div className="w-1/2 px-2">
                <p>Field Label</p>
                <input
                  className="p-2 rounded tracking-wide bg-gray-200 w-full"
                  placeholder="Label"
                  name="label"
                  ref={register({
                    required: 'Required',
                  })}
                />
                <div className="text-red-400 text-sm italic">
                  {errors.label && errors.label.message}
                </div>
              </div>
              <div className="w-1/2 px-2">
                <p>Field type</p>
                <div className="flex felx-row">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 p-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="fieldType"
                    ref={register()}
                  >
                    <option value="text">Text</option>
                    <option value="number">Number</option>
                    <option value="boolean">Boolean</option>
                    <option value="checkbox">Checkbox</option>
                  </select>
                  <FontAwesomeIcon
                    className="items-center justify-center"
                    icon={faChevronDown}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full py-2">
              <button className="bg-blue-500 rounded m-2 text-white p-2 w-1/2" type="submit">Add</button>
              <button className="lg:hidden bg-dark-500 rounded m-2 text-white p-2 w-1/2 " type="button" onClick={() => goToFormView()}>view form</button>
            </div>
          </form>

          <div className="py-4 overflow-y-scroll max-h-65-vh no-scroll-bar">
            {isEmpty(formDataSelector) && (
              <div className="flex flex-row items-center justify-center h-3/5-vh">
                <FontAwesomeIcon
                  icon={faMeh}
                  size="3x"
                  className="text-dark-900"
                />
                <div className="px-4 font-medium text-dark-900 italic">
                  <p>List is empty</p>
                </div>
              </div>
            )}
            {!isEmpty(formDataSelector) && (
              formDataSelector.map((formData) => (
                // eslint-disable-next-line react/jsx-key
                <div key={formData.id}>
                  <ListCard
                    label={formData.label}
                    fieldType={formData.fieldType}
                    action={() => { removeField(formData.id); }}
                  />
                </div>
              ))
            )}
          </div>
          <div />
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 w-full bg-dark-300">
        <FormView />
      </div>
    </div>
  );
};

export default FormBuilder;
