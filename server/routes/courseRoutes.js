const express = require("express");
const formidable = require("express-formidable");

const router = express.Router();

const Course = require("../models/course");
const fetchuser = require("../middleware/fetchlogin");

// controllers
const {
  //   uploadImage,
  //   removeImage,
  coursescreate,
  read,
  uploadVideo,
  //   removeVideo,
  addLesson,
  update,
  removeLesson,
  updateLesson,
  publishCourse,
  unpublishCourse,
  courses,
  //   checkEnrollment,
  //   freeEnrollment,
  //   paidEnrollment,
  //   stripeSuccess,
  //   userCourses,
  //   markCompleted,
  //   listCompleted,
  //   markIncomplete,
} = require("../controllers/course");

router.get("/allcourses", courses);
// image
// router.post("/course/upload-image", uploadImage);
// router.post("/course/remove-image", removeImage);

// course
router.post("/coursecreate", fetchuser, coursescreate);
router.put("/course/:slug", fetchuser, update);
router.get("/course/:slug", read);
router.post("/course/:slug/addLesson", fetchuser, formidable(), addLesson);
// router.post("/course/video-remove/:instructorId", requireSignin, removeVideo);

// publish unpublish
// router.put("/course/publish/:courseId", requireSignin, publishCourse);
// router.put("/course/unpublish/:courseId", requireSignin, unpublishCourse);

// `/api/course/lesson/${slug}/${course.instructor._id}`,
// router.post("/course/lesson/:slug/:instructorId", requireSignin, addLesson);
// router.put("/course/lesson/:slug/:instructorId", requireSignin, updateLesson);
// router.put("/course/:slug/:lessonId", requireSignin, removeLesson);

// router.get("/check-enrollment/:courseId", requireSignin, checkEnrollment);

// enrollment
// router.post("/free-enrollment/:courseId", requireSignin, freeEnrollment);
// router.post("/paid-enrollment/:courseId", requireSignin, paidEnrollment);
// router.get("/stripe-success/:courseId", requireSignin, stripeSuccess);

// router.get("/user-courses", requireSignin, userCourses);
// router.get("/user/course/:slug", requireSignin, isEnrolled, read);

// mark completed
// router.post("/mark-completed", requireSignin, markCompleted);
// router.post("/list-completed", requireSignin, listCompleted);
// router.post("/mark-incomplete", requireSignin, markIncomplete);

module.exports = router;
