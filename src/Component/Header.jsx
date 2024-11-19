
const Header = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo/Title */}
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold font-mono flex items-center">
            User Bank
            <span className="ml-2" role="img" aria-label="bank">🏦</span>
          </h1>
        </div>

        {/* GitHub Link */}
        <a
          href="https://github.com/your-username/your-repo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-200 transition"
          aria-label="GitHub Repository"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .297a12 12 0 0 0-3.797 23.422c.6.111.82-.261.82-.581v-2.256c-3.338.724-4.043-1.61-4.043-1.61a3.164 3.164 0 0 0-1.317-1.732c-1.08-.74.084-.726.084-.726a2.506 2.506 0 0 1 1.827 1.229 2.542 2.542 0 0 0 3.47.996 2.515 2.515 0 0 1 .759-1.592c-2.665-.306-5.466-1.335-5.466-5.933A4.64 4.64 0 0 1 5.292 8.59a4.296 4.296 0 0 1 .117-3.164s1.006-.322 3.302 1.23a11.43 11.43 0 0 1 6.008 0c2.297-1.552 3.301-1.23 3.301-1.23a4.296 4.296 0 0 1 .118 3.164 4.64 4.64 0 0 1 1.24 3.221c0 4.61-2.807 5.624-5.481 5.921a2.81 2.81 0 0 1 .818 2.18v3.237c0 .322.218.694.825.576A12 12 0 0 0 12 .297z" />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Header;
