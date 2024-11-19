import { useState } from "react";

export default function Table() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const FomData = [
    {
      UserName: "Rajesh",
      UserEmail: "xigaq@mailinator.com",
      UserAge: "33",
    },
    {
      UserName: "dhinesh",
      UserEmail: "xigaq@mailinator.com",
      UserAge: "18",
    },
    {
      UserName: "praveen",
      UserEmail: "xigaq@mailinator.com",
      UserAge: "23",
    },
    {
      UserName: "savitha",
      UserEmail: "xigaq@mailinator.com",
      UserAge: "28",
    },
  ];

  const UpdateForm = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
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
              {FomData.map((data, index) => {
                return (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-6 py-4">example.txt</td>
                    <td className="px-6 py-4">25</td>
                    <td className="px-6 py-4">example@example.com</td>
                    <td className="px-6 py-4">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                        onClick={UpdateForm}
                      >
                        Update
                      </button>
                      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none ml-2">
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

            <form className="space-y-4">
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
                />
              </div>

              <div>
                <label
                  htmlFor="userEmail"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="userEmail"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
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
