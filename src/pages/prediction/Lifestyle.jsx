import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSetRecoilState } from 'recoil';
import { PredictNow } from '../../store/atoms/PredictNow';

export default function Sleep1() {
    const [sleepHour, setSleepHour] = useState('');
    const [status, setStatus] = useState('');
    const [isFormValid, setIsFormValid] = useState(false); // State for form validation
    const [PhyActEng, setPhyActEng] = useState(false)

    const setUserLifestyle = useSetRecoilState(PredictNow)

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    const handleSleepHour = (data) => {
        setSleepHour(data);
        setIsFormValid(data !== '' && status !== ''); // Update form validation state
    };

    const handleStatus = (data) => {
        setStatus(data);
        setIsFormValid(data !== '' && sleepHour !== ''); // Update form validation state
    };

    // 'JunkFood':-1,'Alcohol': -1,  // 0: Non-drinker, 1: Drinker
    //     'Sleep': -1'PhysicallyActive_less than half an hr': -1,
    //     'Stress':-1,
    //     'SmokingStatus': -1,



    const smokeStatus = [
        { label: 'Never', status: 'Never', value: 'Never' },
        { label: 'Smoke occasionally', status: 'Smoke occasionally', value: 'occasionally' },
        // { label: 'Consume alcohol occasionally', status: 'Consume alcohol occasionally', value: 'Consume alcohol occasionally' },
        { label: 'Smoke frequently', status: 'Smoke frequently', value: 'frequently' },
        // { label: 'Consume alcohol frequently', status: 'Consume alcohol frequently', value: 'Consume alcohol frequently' },
    ];

    const alcoholStatus = [
        { label: 'Never', status: 'Never', value: 'Never' },
        { label: 'drink alcohol occasionally', status: 'drink alcohol occasionally', value: 'occasionally' },
        // { label: 'Consume alcohol occasionally', status: 'Consume alcohol occasionally', value: 'Consume alcohol occasionally' },
        { label: 'drink alcohol frequently (more than 10 drinks per week)', status: 'drink alcohol frequently', value: 'frequently' },
    ]

    const stressStatus = [
        { label: 'Stress very less', status: 'Stress very less', value: 'Stress very less' },
        { label: 'Stress sometimes', status: 'Stress sometimes', value: 'Stress sometimes' },
        // { label: 'Consume alcohol occasionally', status: 'Consume alcohol occasionally', value: 'Consume alcohol occasionally' },
        { label: 'Stress frequently', status: 'Stress frequently', value: 'Stress frequently' },
    ]
    return (
        <div className='mx-[30%] my-[5%]'>

            <Formik
                initialValues={{
                    sleep: 0,
                    phyActEng: false,
                    exercise: 0,
                }}
                validationSchema={Yup.object({
                    sleep: Yup.number().min(0, 'sleep must be a positive number').max(13, 'sleep must be less that 13').required('Required'),
                    phyActEng: Yup.number().required('Required'),
                    exercise: Yup.number().min(0, 'exercise must be a positive number').max(10, 'exercise must be less that 10').required('Required'),
                })}
                onSubmit={(values) => {
                    console.log(values)
                    setUserLifestyle((prev) => ({
                        ...prev,
                        Sleep: values.sleep
                    }))
                    setUserLifestyle((prev) => ({
                        ...prev,
                        PhysActivity: parseInt(values.phyActEng)
                    }))
                    setUserLifestyle((prev) => ({
                        ...prev,
                        PhysicallyActiveDuration: values.exercise
                    }))

                }}
            >
                <Form>
                    <div className='mt-10'>
                        <div className='mt-5 fle'>
                            <h3 className='font-Roboto text-sm mb-1'>
                                How many hours of sleep do you get per night?
                            </h3>
                            <Field type="number" name="sleep" placeholder="Enter sleep in hours"
                                className='h-8 border border-green-500 px-3 py-2 rounded  focus:outline-none focus:border-green-700 w-1/2'
                            />
                            {/* <ErrorMessage name="age" component="div" className="text-red-500 test-sm" /> */}
                        </div>
                        <br />

                        <div className='mt-5'>
                            <h3 className='font-Roboto text-sm mb-1'>
                                Did you engage in physical activity over the last 30 days?
                            </h3>
                            <div role="group" aria-labelledby="my-radio-group">
                                <label>
                                    <Field type="radio" name="phyActEng" value="1" onClick={() => { setPhyActEng(true) }} />
                                    Yes
                                </label>
                                <label className='ml-10'>
                                    <Field type="radio" name="phyActEng" value="0" onClick={() => { setPhyActEng(false) }} />
                                    No
                                </label>
                            </div>
                            <ErrorMessage name="phyActEng" component="div" className="text-red-500 test-sm" />
                        </div>
                        <br />

                        {
                            (PhyActEng == true) && (
                                <div>
                                    <div className='mt-5 fle'>
                                        <h3 className='font-Roboto text-sm mb-1'>
                                            How many hours do you exercise per day?
                                        </h3>
                                        <Field type="number" name="exercise" placeholder="Enter exercise in hours ex: 1.5 or 0.5 etc" className='h-8 border border-green-500 px-3 py-2 rounded  focus:outline-none focus:border-green-700 w-1/2' />
                                        {/* <ErrorMessage name="age" component="div" className="text-red-500 test-sm" /> */}
                                    </div>
                                    <br />
                                </div>
                            )
                        }


                        <div className='mt-5'>
                            <h3 className='font-Roboto text-sm mb-1'>Do you smoke?</h3>
                            <Select
                                options={smokeStatus}
                                value={smokeStatus.value}
                                placeholder='Select your smoking status'
                                onChange={(ele) => { setUserLifestyle((prev) => ({ ...prev, SmokingStatus: ele.value })) }}
                                isSearchable={true}
                            />
                        </div>



                        <div className='mt-5'>
                            <h3 className='font-Roboto text-sm mb-1'>Do you consume alcohol?</h3>
                            <Select
                                options={alcoholStatus}
                                value={alcoholStatus.value}
                                placeholder='Select your alcohol status'
                                onChange={(e) => { setUserLifestyle((prev) => ({ ...prev, Alcohol: e.value })) }}
                                isSearchable={true}
                            />

                        </div>

                        <div className='mt-5'>
                            <h3 className='font-Roboto text-sm mb-1'>How often do you experience stress?</h3>
                            <Select
                                options={stressStatus}
                                value={stressStatus.value}
                                placeholder='Select your stress status'
                                onChange={(e) => { setUserLifestyle((prev) => ({ ...prev, Stress: e.value })) }}

                                isSearchable={true}
                            />

                        </div>

                        <button type='submit' className='rounded-md bg-green-900 px-5 py-2 text-white mt-5' >Submit</button>

                    </div>
                </Form>
            </Formik>
        </div>
    );
}
