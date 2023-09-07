import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { ToastContainer } from 'react-toastify'
import { usePostEmployeeData } from '../../services/employeeServices'
import { notifyDone } from "../../assets/toster"

export const AddEmployeeComponent = () => {

    const validation = {
        name: {
            required: {
                value: true,
                message: "Employee name is required."
            },
            minLength: {
                value: 3,
                message: "minimum words length is 3."
            },
            maxLength: {
                value: 200,
                message: "maximum words length is 200."
            }
        },
        email: {
            required: {
                value: true,
                message: "Email is required."
            },
            minLength: {
                value: 3,
                message: "minimum words length is 3."
            },
            maxLength: {
                value: 200,
                message: "maximum words length is 60."
            }
        },
        email2: {
            minLength: {
                value: 3,
                message: "minimum words length is 3."
            },
            maxLength: {
                value: 200,
                message: "maximum words length is 60."
            }
        },
        phoneNumber: {
            required: {
                value: true,
                message: "Phone number is required."
            },
            minLength: {
                value: 8,
                message: "minimum words length is 8."
            },
            maxLength: {
                value: 12,
                message: "maximum words length is 12."
            }
        },
        phoneNumber2: {
            minLength: {
                value: 8,
                message: "minimum words length is 8."
            },
            maxLength: {
                value: 12,
                message: "maximum words length is 12."
            }
        },
        address: {
            required: {
                value: true,
                message: "Address is required."
            },
            minLength: {
                value: 10,
                message: "minimum words length is 10."
            },
            maxLength: {
                value: 3000,
                message: "maximum words length is 3000."
            }
        },
        designation: {
            required: {
                value: true,
                message: "Designatoin is required."
            }
        },
        department: {
            required: {
                value: true,
                message: "Department is required."
            }
        }
    }


    var navigate = useNavigate()

    var { register, handleSubmit, formState: { errors } } = useForm();

    const submitData = (data) => {
        console.log(data);
        mutation.mutate(data)
    }

    const mutation = usePostEmployeeData();

    useEffect(() => {
        if (mutation.isError) {
            navigate('/erorr404')
        }
        if (mutation.data) {
            notifyDone("Employee added successfully.")
        }
    }, [mutation])

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div id="main">
                <header className="mb-3">
                    <a href="#" className="burger-btn d-block d-xl-none">
                        <i className="bi bi-justify fs-3" />
                    </a>
                </header>
                <div className="page-heading">
                    <div className="page-title">
                        <div className="row">
                            <div className="col-12 col-md-6 order-md-1 order-last">
                                <h3>Employees</h3>
                            </div>
                            <div className="col-12 col-md-6 order-md-2 order-first">
                                <nav
                                    aria-label="breadcrumb"
                                    className="breadcrumb-header float-start float-lg-end"
                                >
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Deshboard</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Employees
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <section className="section">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Enter employee's details</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(submitData)} id='forms'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div class="form-group mandatory">
                                                <label for="first-name-column" class="form-label">Employee Name</label>
                                                <input type="text"
                                                    id="first-name-column"
                                                    class="form-control"
                                                    placeholder="Enter Employee name"
                                                    name="fname-column"
                                                    data-parsley-required="true"
                                                    {...register("name", validation.name)} />
                                                <span className='text-danger font-weight-bold'>{errors?.name?.message}</span>
                                            </div>
                                            <div className="form-group mandatory">
                                                <label htmlFor="phoneNo" class="form-label">Phone Number</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="phoneNo"
                                                    placeholder="Enter phone number"
                                                    data-parsley-required="true"
                                                    {...register("phoneNumber", validation.phoneNumber)}
                                                />
                                                <span className='text-danger font-weight-bold'>{errors?.phoneNumber?.message}</span>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phoneNumberSecond" class="form-label">Phone Number</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="phoneNumberSecond"
                                                    placeholder="Enter second phone number"
                                                    {...register("phoneNumber2", validation.phoneNumber2)}
                                                />
                                                <span className='text-danger font-weight-bold'>{errors?.phoneNumber2?.message}</span>
                                            </div>
                                            <fieldset class="form-group mandatory">
                                                <label htmlFor="designation" class="form-label">Select designation</label>
                                                <select class="form-select" id="designation" {...register("designation", validation.designation)}>
                                                    <option value="">Select designation</option>
                                                    <option value="Executive">Executive</option>
                                                    <option value="Admin">Admin</option>
                                                    <option value="SubAdmin">Sub Admin</option>
                                                    <option value="Purchase">Purchase</option>
                                                    <option value="Store">Store</option>
                                                    <option value="Production">Production</option>
                                                    <option value="Worker">workers</option>
                                                </select>
                                                <span className='text-danger font-weight-bold'>{errors?.designation?.message}</span>
                                            </fieldset>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mandatory">
                                                <label htmlFor="email" class="form-label">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Enter email address"
                                                    {...register("email", validation.email)}
                                                />
                                                <span className='text-danger font-weight-bold'>{errors?.email?.message}</span>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email" class="form-label">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Enter second email address"
                                                    {...register("email2", validation.email2)}
                                                />
                                                <span className='text-danger font-weight-bold'>{errors?.email2?.message}</span>
                                            </div>
                                            <fieldset class="form-group mandatory">
                                                <label htmlFor="designation" class="form-label">Select designation</label>
                                                <select class="form-select" id="designation" {...register("department", validation.department)}>
                                                    <option value="">Select department</option>
                                                    <option value="mechanical">Mechanical</option>
                                                    <option value="electrical">Electrical</option>
                                                </select>
                                                <span className='text-danger font-weight-bold'>{errors?.department?.message}</span>
                                            </fieldset>
                                            <div className="form-group mandatory">
                                                <label for="address" class="form-label">Address</label>
                                                <textarea
                                                    class="form-control"
                                                    maxLength="3000"
                                                    id="address"
                                                    rows="2"
                                                    {...register("address", validation.address)}
                                                ></textarea>
                                                <span className='text-danger font-weight-bold'>{errors?.address?.message}</span>
                                            </div>
                                            <div class="d-flex form-group">
                                                {
                                                    mutation.isLoading ? (
                                                        <button class="btn btn-primary mx-1" type="button" disabled="">
                                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                            Loading...
                                                        </button>
                                                    ) : (
                                                        <button type="submit" class="btn btn-primary me-1 mb-1">Submit</button>
                                                    )
                                                }
                                                <button type="reset" class="btn btn-light-secondary me-1 mb-1" onClick={() => document.getElementById("forms").reset()}>Reset</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section >
                </div >
            </div >
        </>
    )
}
