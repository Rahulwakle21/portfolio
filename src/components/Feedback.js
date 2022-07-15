import React from 'react'
import { Formik, Form , Field ,ErrorMessage } from 'formik';

function Feedback() {

    return (
        <div className='container mt-4'>
            <div className="row">
                <div className="col-6 mt-3" style={{border:"2px solid",marginLeft:"30%"}}>
                    <h3 className='py-4 text-center'>Feedback Form</h3>
               <Formik

                            initialValues={{}} onSubmit={(values)=>{
                                console.log(values);
                            }}>
                                <Form>
                                <label>Name:</label>
                                <Field name="name" type="text"/>
                                <span style={{color:"red"}}><ErrorMessage name="name"/></span>
                                
                                    <br /> <br />
                                    <label>Date:</label>
                                <Field name="date" type="date"/>
                                <br /><br />
                                <label>Feedback Title</label>
                                <Field name="text" type="text"  />
                                
                                <br /><br />

                                <label>Message box</label>
                                <Field name="text" type="textarea"/>
                                
                                <br /><br />

                                <label>Gender:</label>
                                
                                <br /><br />

                                <label className='me-3' >Male</label>
                                <Field name="gender" value="male" type="radio"/>
                                
                                <label className='ms-4' >Female</label>
                                <Field className="ms-3" name="gender" value="female" type="radio"/>
                                <br /><br />

                                <label>category:</label>
                                
                                <br /><br />

                                <label className='me-3'>ReactJs</label>
                                <Field name="categgory" value="male" type="checkbox"/>
                                
                                <label className='ms-3'>Female</label>
                                <Field className="ms-3" name="gender" value="female" type="checkbox"/>
                                <br /><br />

                                
                                
                                
                                <button className='btn btn-info' type='submit'>Submit</button>
                                </Form>
                            </Formik>
                            </div>
                            </div>
        </div>
    )
}

export default Feedback
