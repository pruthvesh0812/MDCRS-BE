import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Basic1 = () => {
  return (
    <div className='ml-[30%] my-[10%] '>
      <Formik
        initialValues={{
          age: '',
          gender: '',
          isPregnant: false,
          weight: '',
          height: ''
        }}
        validationSchema={Yup.object({
          age: Yup.number().min(0, 'Age must be a positive number').max(110, 'Age must be less than or equal to 110').required('Required'),
          gender: Yup.string().required('Required'),
          weight: Yup.number().min(0, 'Weight must be a positive number').required('Required'),
          height: Yup.number().min(0, 'Height must be a positive number').required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className='mt-5 fle'>
            <h3 className='font-Roboto text-sm mb-1'>
              Age
            </h3>
            <Field type="number" name="age" placeholder="Enter age in years" className='h-8 border border-green-500 px-3 py-2 rounded  focus:outline-none focus:border-green-700 w-1/2' />
            <ErrorMessage name="age" component="div" className="text-red-500 test-sm" />
          </div>
          <br />

          <div className='mt-5'>
            <h3 className='font-Roboto text-sm mb-1'>
              Gender
            </h3>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label className='ml-5'>
                <Field type="radio" name="gender" value="female"/>
                Female
              </label>
              <label className='ml-5'>
                <Field type="radio" name="gender" value="other" />
                Other
              </label>
            </div>
            <ErrorMessage name="gender" component="div" className="text-red-500 test-sm" />
          </div>
          <br />

          <div className='flex'>
            <div className='mt-5'>
              <h3 className='font-Roboto text-sm mb-1'>
                Weight
              </h3>
              <Field type="number" name="weight" placeholder="Enter weight in kgs" className='h-8 border border-green-500 px-3 py-2 rounded  focus:outline-none focus:border-green-700' />
              <ErrorMessage name="weight" component="div" className="text-red-500 test-sm" />
            </div>
            <br />

            <div className='mt-5 ml-4'>
              <h3 className='font-Roboto text-sm mb-1'>
                Height
              </h3>
              <Field type="number" name="height" placeholder="Enter height in m" className='h-8 border border-green-500 px-3 py-2 rounded  focus:outline-none focus:border-green-700' />
              <ErrorMessage name="height" component="div" className="text-red-500" />
            </div>
          </div>

          <Field name="gender">
            {({ field }) => (
              <div>
                {field.value === 'female' && (
                  <div className='font-Roboto text-sm mb-1'>
                    Are you pregnant?
                    <Field type="checkbox" name="isPregnant" />
                  </div>
                )}
              </div>
            )}
          </Field>
          <br />

          <Link to=''>
            <button type='submit' className='rounded-md bg-green-900 px-5 py-2 text-white mt-5'>Submit</button>
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default Basic1;
