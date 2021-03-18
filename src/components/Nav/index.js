import React from "react";

const Nav = () => {
    const categories = [
        {
            name: "commercial",
            description:
                "Photos of grocery stores, food trucks, and other commercial projects"
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
            name: "landscape",
            description: "Fields, farmhouses, waterfalls, and the beauty of nature"
        }
    ];

    const catagorySelected = (name) => {
        console.log(`${name} clicked`);
    };

    return (
        <header>
            <h2>
                <a href="/" data-testid="link">
                    <span role="img" aria-label="camera">
                        📸
                    </span>
                    Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" data-testid="about">About me</a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((catagory) => (
                        <li className="mx-1" key={catagory.name}>
                            <span onClick={() => catagorySelected(catagory.name)}>
                                {catagory.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
