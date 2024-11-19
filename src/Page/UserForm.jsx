import axios from "axios";

export default function UserForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
  

    try {
      axios.post("https://userbankexpress.onrender.com/", data);
      alert('Your data save successfully')
    } catch (err) {
      console.log(err);
    }

    form.reset()

  };

  return (
    <form
      className="max-w-lg mx-auto mt-8 p-6 space-y-6 bg-white shadow-md rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="UserName"
          className="text-lg font-semibold text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          className="bg-gray-100 border border-gray-300 text-gray-700 text-base px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="UserName"
          id="UserName"
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="UserEmail"
          className="text-lg font-semibold text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          className="bg-gray-100 border border-gray-300 text-gray-700 text-base px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="UserEmail"
          id="UserEmail"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="UserAge"
          className="text-lg font-semibold text-gray-700"
        >
          Age
        </label>
        <input
          type="number"
          className="bg-gray-100 border border-gray-300 text-gray-700 text-base px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
          id="UserAge"
          name="UserAge"
          placeholder="Enter your age"
          min={10}
          max={100}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full text-white bg-blue-500 hover:bg-blue-600 text-lg font-semibold py-3 rounded transition duration-200"
      >
        Save
      </button>
    </form>
  );
}
