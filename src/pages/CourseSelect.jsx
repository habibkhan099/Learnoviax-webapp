import { Link } from "react-router-dom";

const courses = ["Python", "C++", "Java", "Mathematics (Grade 9)", "Mathematics (Grade 10)"];

export default function CourseSelect() {
  const handleSelectCourse = (course) => {
    localStorage.setItem("course", course); // ✅ save selected course
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">📚 Choose a Course</h2>
      <div className="grid grid-cols-1 gap-4 w-72">
        {courses.map((course, i) => (
          <Link to="/level" key={i} onClick={() => handleSelectCourse(course)}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-md w-full">
              {course}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

