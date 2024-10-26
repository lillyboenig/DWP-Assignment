const Header = ({ image, title }) => {
    return (
        <header className="header">
            <img src={image} alt="Product Logo" className="header-image" />
            <h1 className="header-title">{title}</h1>
        </header>
    );
};

export default Header;