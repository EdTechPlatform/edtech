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
    // console.log(location.state);
    const portfolioSlug = location.state.portfolioSlug;
    const moduleNumber = location.state.moduleNumber;

    // const [title, setTitle] = useState("");
    // const [number, setNumber] = useState("");
    // const [video, setVideo] = useState("");
    const [uploadButtonText, setUploadButtonText] = useState("Upload Video");
    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState(null);
    // 
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const handleClose = () => {
        setShow(false);
    };

    const onChangeHandler = async (e) => {
        e.preventDefault();
        setFile(
            e.target.files[0],
            // loaded: 0,
        );
        // console.log("*********",e.target.files[0]);
    };
    // console.log("[[[[[[]]]]]]",file);
    const handleSubmit = async (e) => {
        // console.log(",,,,, file => ", file);
        // const file = e.target.files[0];
        e.preventDefault();
        const formData = new FormData();
        // const { selectedFile } = file;
        formData.append('video', file);
        // console.log(",,,,, formdata => ", formData);
        const response = await fetch(
            `http://localhost:5000/edcourse/addvideo/${portfolioSlug}/${moduleNumber}`,
            {
                method: "POST",
                headers: {jToken: localStorage.getItem("jToken"),},
                body: formData,
                onUploadProgress: (e) => {setProgress(Math.round((100 * e.loaded) / e.total));}
            }
        );
    setUploadButtonText("Video Uploaded");
    const json = await response.json();
    // console.log("------json => ", json);
    if (json.success === true) {
        setTimeout(() => {
            toast.success("Video Uploaded Successfully", {
                position: "top-center",
            });
        }, 100);
        setTimeout(() => {
            navigate("/account/tutorial/tutorialPage/modulevideo", { replace: true });
            setUploadButtonText("Upload Video");
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
                {/* <form method="POST" onSubmit={handleSubmit}> */}
                <form method="POST">
                    <div className="mb-3">
                        <label className="btn btn-dark btn-block text-left mt-3">
                            {uploadButtonText}
                            <br/>
                         
                            <input
                                // onChange={handleVideo}
                                type="file"
                                accept="video/*"
                                onChange={onChangeHandler}
                                hidden />
                        </label>
                        {progress}
                    </div>
                    <div className="d-grid">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleSubmit}
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
