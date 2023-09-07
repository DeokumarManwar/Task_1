import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { ToastContainer } from 'react-toastify'
import { notifyDone } from "../../assets/toster"
import { useAddModelByMachine, useGetMachines } from '../../services/machineAndMaintenanceService'

export const AddModelByMachineComponent = () => {

    const validation = {
        modelNo: {
            required: {
                value: true,
                message: "Model number is required."
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
        machineCompanyName: {
            required: {
                value: true,
                message: "Machine company name is required."
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
        remarks: {
            required: {
                value: true,
                message: "Remarks is required."
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
        purchaseDate: {
            required: {
                value: true,
                message: "Purchase date is required."
            }
        },
        mntDueDate: {
            required: {
                value: true,
                message: "Maintenance due date is required."
            }
        },
        invoice: {
            required: {
                value: true,
                message: "Invoice is required."
            },
            minLength: {
                value: 1,
                message: "minimum words length is 1."
            },
            maxLength: {
                value: 200,
                message: "maximum words length is 200."
            }
        },
        machineId: {
            required: {
                value: true,
                message: "Machine is required."
            }
        }
    }


    var navigate = useNavigate()
    var { data, isError, isLoading } = useGetMachines()

    var { register, handleSubmit, formState: { errors } } = useForm();

    const submitData = (data) => {
        console.log(data);
        mutation.mutate(data)
    }

    const mutation = useAddModelByMachine();

    const [note, setnote] = useState(0)

    useEffect(() => {
        if (mutation.isError || isError) {
            navigate('/erorr404')
        }
        if (mutation.data && note === 0) {
            notifyDone("Machine's model added successfully.")
            setnote(1)
        }
        if (mutation.isLoading) {
            setnote(0)
        }
    }, [mutation, data, isLoading])

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
                                <h3>Machine's models</h3>
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
                                            models
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <section className="section">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Enter Machine wise models</h4>
                            </div>
                            <div className="card-body">
                                {
                                    isLoading === true || data.data.data === undefined ? (
                                        <div className='d-flex justify-content-center align-item-center my-5'>
                                            <div class="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                                                <span class="visually-hidden"></span>
                                            </div>
                                        </div>
                                    ) : (

                                        <form onSubmit={handleSubmit(submitData)} id='forms'>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <fieldset class="form-group mandatory">
                                                        <label htmlFor="designation" class="form-label">Select machine</label>
                                                        <select class="form-select" id="designation" {...register("machineId", validation.machineId)}>
                                                            <option value="">Select machine</option>
                                                            {
                                                                data?.data?.data?.map(machine => {
                                                                    return (
                                                                        <option value={machine._id}>{machine.name}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                        <span className='text-danger font-weight-bold'>{errors?.machineId?.message}</span>
                                                    </fieldset>
                                                    <div class="form-group mandatory">
                                                        <label for="machinecompanyname" class="form-label">machine Company Name</label>
                                                        <input type="text"
                                                            id="machinecompanyname"
                                                            class="form-control"
                                                            placeholder="Enter machine company name"
                                                            name="fname-column"
                                                            data-parsley-required="true"
                                                            {...register("machineCompanyName", validation.machineCompanyName)} />
                                                        <span className='text-danger font-weight-bold'>{errors?.machineCompanyName?.message}</span>
                                                    </div>
                                                    <div className="form-group mandatory">
                                                        <label htmlFor="purchaseDate" class="form-label">Purchase date</label>
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            id="purchaseDate"
                                                            data-parsley-required="true"
                                                            {...register("purchaseDate", validation.purchaseDate)}
                                                        />
                                                        <span className='text-danger font-weight-bold'>{errors?.purchaseDate?.message}</span>
                                                    </div>
                                                    <div className="form-group mandatory">
                                                        <label htmlFor="invoice" class="form-label">Invoice</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="invoice"
                                                            placeholder="Enter invoice remarks"
                                                            {...register("invoice", validation.invoice)}
                                                        />
                                                        <span className='text-danger font-weight-bold'>{errors?.invoice?.message}</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mandatory">
                                                        <label htmlFor="model" class="form-label">Model number</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="model"
                                                            placeholder="Enter model remarks"
                                                            {...register("modelNo", validation.modelNo)}
                                                        />
                                                        <span className='text-danger font-weight-bold'>{errors?.modelNo?.message}</span>
                                                    </div>
                                                    <div className="form-group mandatory">
                                                        <label htmlFor="mntDueDate" class="form-label">Maintenance due date</label>
                                                        <input
                                                            type="date"
                                                            className="form-control"
                                                            id="mntDueDate"
                                                            {...register("mntDueDate", validation.mntDueDate)}
                                                        />
                                                        <span className='text-danger font-weight-bold'>{errors?.mntDueDate?.message}</span>
                                                    </div>
                                                    <div className="form-group mandatory">
                                                        <label for="remarks" class="form-label">Remarks</label>
                                                        <textarea
                                                            class="form-control"
                                                            maxLength="3000"
                                                            id="remarks"
                                                            rows="4"
                                                            {...register("remarks", validation.remarks)}
                                                        ></textarea>
                                                        <span className='text-danger font-weight-bold'>{errors?.remarks?.message}</span>
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

                                    )
                                }
                            </div >
                        </div >
                    </section >
                </div >
            </div >
        </>
    )
}
