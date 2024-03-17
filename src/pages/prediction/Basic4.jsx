import React from 'react'
import Select from 'react-select';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { PredictNow } from '../../store/atoms/PredictNow';
// 'Education': -1, // High school graduate
// 'Diabetes_binary': -1, // after diabetes risk prediction
// 'hypertension': -1, // Binary: 1 = Yes, 0 = No
// 'heart_disease': -1, // Binary: 1 = Yes, 0 = No
// 'avg_glucose_level': -1, // Average glucose level in mg/dL
// 'ever_married': -1, // Binary: 1 = No, 0 = Yes
// 'work_type': -1, // Govt_job,Private,Self-employed,children,Never_worked
// 'Residence_type': -1, // Binary: 1 = Rural, 0 = Urban

export default function Basic4() {
    const incomes = [
        { label: 'less than 8 Lac per annum', income: 'less8lpa', value: 1 },
        { label: 'less than 16 Lac per annum', income: 'less16lpa', value: 2 },
        { label: 'less than 24 Lac per annum', income: 'less24lpa', value: 3 },
        { label: 'less than 32 Lac per annum', income: 'less32lpa', value: 4 },
        { label: 'less than 40 Lac per annum', income: 'less40lpa', value: 5 },
        { label: 'less than 48 Lac per annum', income: 'less48lpa', value: 6 },
        { label: 'less than 56 Lac per annum', income: 'less56lpa', value: 7 },
        { label: 'more than 56 Lac per annum', income: 'more56lpa', value: 8 },

    ]
    const setUserLifestyle = useSetRecoilState(PredictNow)
    const handleIncome = (data) => {
        console.log(data)
        setUserLifestyle((prev) => ({ ...prev, Income: data.value }))
    }

    return (
        <div className='flex justify-center m-14'>
            <div>
                <Formik
                    initialValues={{
                        workType: '',
                        residenceType: '',
                        Education: 0,
                        Income: 0,
                        married: 0
                    }}
                    validationSchema={Yup.object({
                        workType: Yup.string().required('Required'),
                        residenceType: Yup.string().required('Required'),
                        Education: Yup.number().required('Required'),
                        Income: Yup.number().required('Required'),
                        married: Yup.number().required('Required'),
                    })}
                    onSubmit={(values) => {
                       
                        setUserLifestyle((prev) => ({ ...prev, work_type: values.workType }))

                        setUserLifestyle((prev) => ({ ...prev, Residence_type: values.residenceType }))
                        setUserLifestyle((prev) => ({ ...prev, Education: values.Education }))
                        setUserLifestyle((prev) => ({ ...prev, ever_married: Number(values.married) }))
                        setUserLifestyle((prev) => ({ ...prev, Income: values.Income }))

                    }}
                >
                    <Form>

                        <div className='mt-5'>
                            <h3 className='font-Roboto text-sm mb-1'>
                                Type Of Work You Do
                            </h3>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                    <Field type="radio" name="workType" value="Govt" />
                                    Government Job
                                </label>
                                <label className='ml-10'>
                                    <Field type="radio" name="workType" value="Private" />
                                    Private
                                </label>
                                <label className='ml-10'>
                                    <Field type="radio" name="workType" value="SelfEmployed" />
                                    Self Employed
                                </label>
                                <label className='ml-10'>
                                    <Field type="radio" name="workType" value="Children" />
                                    Househould work/ House Wife
                                </label>
                                <label className='ml-10'>
                                    <Field type="radio" name="workType" value="Never" />
                                    Never Worked
                                </label>
                            </div>
                            <ErrorMessage name="workType" component="div" className="text-red-500 test-sm" />
                        </div>
                        <br />

                        <div className='mt-5'>
                            <h3 className='font-Roboto text-sm mb-1'>
                                What is your Residence type
                            </h3>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                    <Field type="radio" name="residenceType" value="Rural" />
                                    Rural
                                </label>
                                <label className='ml-10'>
                                    <Field type="radio" name="residenceType" value="Urban" />
                                    Urban
                                </label>
                            </div>
                            <ErrorMessage name="residenceType" component="div" className="text-red-500 test-sm" />
                        </div>
                        <br />

                        <div className='mt-5'>
                            <h3 className='font-Roboto text-sm mb-1'>
                                Your marital status
                            </h3>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                    <Field type="radio" name="married" value='1'
                                         />
                                    married_Yes
                                </label>
                                <label className='ml-10'>
                                    <Field type="radio" name="married" value='0'
                                     />
                                    married_No
                                </label>
                            </div>
                            <ErrorMessage name="married" component="div" className="text-red-500 test-sm" />
                        </div>
                        <br />
                        {/* 1 = Never attended school or only kindergarten 
          2 = Grades 1 through 8 (Elementary) 
          3 = Grades 9 through 11 (Some high school) 
          4 = Grade 12 or GED (High school graduate) 
          5 = College 1 year to 3 years (Some college or technical school) 
          6 = College 4 years or more (College graduate) */}


                        <div className='mt-5'>
                            <h3 className='font-Roboto text-sm mb-1'>
                                What is your Educational Qualification
                            </h3>
                            <div role="group" aria-labelledby="my-radio-group" >
                                <label>
                                    <Field type="radio" name="Education" value='1' />
                                    Never attended school or only kindergarten
                                </label>
                                <label className='ml-10'>
                                    <Field type="radio" name="Education" value='2' />
                                    Class 1-8
                                </label>
                                <label className='ml-10'>
                                    <Field type="radio" name="Education" value='3' />
                                    Class 1-10
                                </label>
                                <label className='ml-10'>
                                    <Field type="radio" name="Education" value='4' />
                                    Class 1-12
                                </label>
                                <label className='ml-10'>
                                    <Field type="radio" name="Education" value='5' />
                                    College 1-3 years
                                </label>
                                <label className='ml-10'>
                                    <Field type="radio" name="Education" value='6' />
                                    College 4 year or more
                                </label>
                            </div>
                            <ErrorMessage name="Education" component="div" className="text-red-500 test-sm" />
                        </div>
                        <br />

                        <div className='mt-5'>
                            <h3 className='font-Roboto text-sm mb-1'>Which category your Income falls into?</h3>
                            <div className=''>
                                <Select
                                    options={incomes}
                                    value={incomes.value}
                                    placeholder='Select Income range'
                                    onChange={handleIncome}
                                    isSearchable={true}

                                />
                            </div>
                        </div>
                        <br />

                        <button type='submit' className='rounded-md bg-green-900 px-5 py-2 text-white mt-5'>Submit</button>

                    </Form>
                </Formik>
            </div>
        </div>
    )
}
