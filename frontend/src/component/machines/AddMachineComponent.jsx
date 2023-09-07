import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { ToastContainer } from 'react-toastify'
import { useAddMachine, useDeleteMachine, useGetMachines } from '../../services/virtualServices'
import { notifyDone, notifyErorr } from "../../assets/toster"

export const AddMachineComponent = () => {

    const validation = {
        name: {
            required: {
                value: true,
                message: "Machine name is required."
            },
            minLength: {
                value: 3,
                message: "minimum words length is 3."
            },
            maxLength: {
                value: 200,
                message: "maximum words length is 200."
            }
        }
    }

    const [notify, setNotify] = useState(0)
    const [deleteNote, setDeleteNote] = useState(0)

    var { register, handleSubmit, formState: { errors } } = useForm();

    const submitData = (data) => {
        console.log(data);
        mutation.mutate(data)
    }

    var { data, isError, isLoading, refetch } = useGetMachines()

    const mutation = useAddMachine()
    const deleteMutation = useDeleteMachine()

    useEffect(() => {
        if (mutation.isError) {
            navigate('/erorr404')
        }
        if (mutation.data && notify === 0) {
            notifyDone("Machine added successfully.")
            setNotify(1)
            refetch()
        }
        if (mutation.isLoading) {
            setNotify(0)
        }
        if (deleteMutation.data && deleteNote === 0) {
            refetch()
            notifyErorr("Machine deleted successfully.")
            setDeleteNote(1)
        }
    }, [mutation, deleteMutation])

    const deleteMachine = (id) => {
        deleteMutation.mutate(id)
        setDeleteNote(0)
    }

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
                                <h3>Machine</h3>
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
                                            Machine
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <section className="section">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Enter Machine's details</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(submitData)} id='forms'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div class="form-group mandatory">
                                                <label for="first-name-column" class="form-label">Machine Name</label>
                                                <input type="text"
                                                    id="first-name-column"
                                                    class="form-control"
                                                    placeholder="Enter machine name"
                                                    name="fname-column"
                                                    data-parsley-required="true"
                                                    {...register("name", validation.name)} />
                                                <span className='text-danger font-weight-bold'>{errors?.name?.message}</span>
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
                                        <div className="col-md-6">
                                            {
                                                data?.data?.data === undefined || isLoading === true || deleteMutation.isLoading === true ? (
                                                    <div className='d-flex justify-content-center align-item-center my-5'>
                                                        <div class="spinner-border" style={{ width: "3rem", height: "3rem" }} role="status">
                                                            <span class="visually-hidden"></span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <ul class="list-group">
                                                        <li class="list-group-item active">Machine list</li>
                                                        {

                                                            data?.data?.data?.map(machine => {
                                                                return (
                                                                    <>
                                                                        <li class="list-group-item d-flex justify-content-between">
                                                                            {machine.name}
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-sm"
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target={`#danger${machine._id}`}
                                                                            >
                                                                                <i class="bi bi-trash3 text-danger"></i>
                                                                            </button>
                                                                        </li>
                                                                        <div
                                                                            class="modal fade text-left"
                                                                            id={`danger${machine._id}`}
                                                                            tabindex="-1"
                                                                            aria-labelledby="myModalLabel120"
                                                                            style={{ display: "none" }}
                                                                            aria-hidden="true">
                                                                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                                                                                <div class="modal-content">
                                                                                    <div class="modal-header bg-danger">
                                                                                        <h5 class="modal-title white" id="myModalLabel120">Danger alert
                                                                                        </h5>
                                                                                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                                                        </button>
                                                                                    </div>
                                                                                    <div class="modal-body">
                                                                                        Are you sure you want to delete this machine? <br />
                                                                                        If you created models of this machine then it will not deletable.
                                                                                    </div>
                                                                                    <div class="modal-footer">
                                                                                        <button type="button" class="btn btn-light-secondary" data-bs-dismiss="modal">
                                                                                            <i class="bx bx-x d-block d-sm-none"></i>
                                                                                            <span class="d-none d-sm-block">Close</span>
                                                                                        </button>
                                                                                        <button
                                                                                            class="btn btn-danger ml-1"
                                                                                            data-bs-dismiss="modal"
                                                                                            onClick={() => { deleteMachine(machine._id) }}
                                                                                        >
                                                                                            <i class="bx bx-check d-block d-sm-none"></i>
                                                                                            <span class="d-none d-sm-block">Delete</span>
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                )
                                            }
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
