import axios from "axios";
import { useEffect, useState } from "react";

export default function Table() {
  const [logindata, setLoginData] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAge, setUserAge] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    getAllData();
  });

  async function getAllData() {
    const data = await axios.get("https://userbankexpress.onrender.com");
    setLoginData(data.data);
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const UpdateForm = (id) => {
    console.log("clicked", id);
    setId(id);
    setIsOpen(!isOpen);

    const filereddata = logindata.find((value) => value._id == id);
    const { UserName, UserEmail, UserAge } = filereddata;
    setUserName(UserName);
    setUserEmail(UserEmail);
    setUserAge(UserAge);
  };

  const handleDelect = async (id) => {
    try {
      const sure = confirm("Are you sure you want to delete?");
      if (sure == true) {
        await axios.delete(`https://userbankexpress.onrender.com/${id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handleAge = (e) => {
    setUserAge(e.target.value);
  };

  const handleUpdate = async (e) => {
    console.log(id);
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const updateData = Object.fromEntries(data);

    try {
      const reoson =  await axios.put(`https://userbankexpress.onrender.com/${id}`, updateData);
      console.log(reoson)
      toggleModal()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container mx-auto mt-8  mb-8">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600 text-sm uppercase font-semibold tracking-wider">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Age</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {logindata.map((data, index) => {
                return (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-6 py-4"> {data.UserName} </td>
                    <td className="px-6 py-4"> {data.UserAge} </td>
                    <td className="px-6 py-4"> {data.UserEmail} </td>
                    <td className="px-6 py-4">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                        onClick={() => UpdateForm(data._id)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none ml-2"
                        onClick={() => handleDelect(data._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* update Form */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Update User Details
            </h2>

            <form className="space-y-4" onSubmit={handleUpdate}>
              <div>
                <label
                  htmlFor="userName"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="userName"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your name"
                  value={userName}
                  name="UserName"
                  onChange={handleName}
                />
              </div>

              <div>
                <label
                  htmlFor="UserEmail"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email 
                </label>
                <input
                  type="email"
                  id="userEmail"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                  value={userEmail}
                  name="UserEmail"
                  onChange={handleEmail}
                />
              </div>

              <div>
                <label
                  htmlFor="userAge"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="userAge"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your age"
                  value={userAge}
                  name="UserAge"
                  onChange={handleAge}
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
