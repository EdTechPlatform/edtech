import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useLocation } from "react-router-dom";

function VideoUpload() {
    const navigate = useNavigate();

    const location = useLocation();
    console.log(location.state);
    const portfolioSlug = location.state.portfolioSlug;
     const moduleNumber = location.state.moduleNumber;

    const [title, setTitle] = useState("");
    const [number, setNumber] = useState("");
    const [video, setVideo] = useState("");
    const [uploadButtonText, setUploadButtonText] = useState("Upload Video");

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const handleClose = () => {
        setShow(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `http://localhost:5000/edcourse/addmodule/${portfolioSlug}/${moduleNumber}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                    jToken: localStorage.getItem("jToken"),
                },
                body: JSON.stringify({
                    videoTitle: title,
                    videoNumber: number,
                   // video: video,
                }),
            }
        );
        const json = await response.json();
        console.log(json);
        if (json.success === true) {
            setTimeout(() => {
                toast.success("Video Uploaded Successfully", {
                    position: "top-center",
                });
            }, 100);
            setTimeout(() => {
                navigate("/account/tutorial/tutorialPage/modulevideo", { replace: true });
            }, 2000);
        }
    };
    return (
        <>
            <center>
                <div className="btn-holder">
                    <Button variant="primary" onClick={handleShow}>
                        + Add Video
                    </Button>
                </div>
            </center>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form method="POST" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label>Video Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Video Title"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Video Number</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter Video Number"
                                required
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                 /*for video upload*/
                        {/* <div className="mb-3">
                            <label className="btn btn-dark btn-block text-left mt-3">
                                {uploadButtonText}
                                <input
                                    // onChange={handleVideo}
                                    type="file"
                                    accept="video/*"
                                    hidden />
                            </label>
                        </div> */}
                        <div className="d-grid">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={handleClose}
                            >
                                Submit
                            </button>
                        </div>
                        <ToastContainer />
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default VideoUpload;
