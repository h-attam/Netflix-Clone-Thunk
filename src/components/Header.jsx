import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10">
      <Link>
        <img
          className="max-w-[200px] "
          src="/public/netflix_logo.svg"
          alt="Netflix"
        />
      </Link>
    </header>
  );
};

export default Header;
