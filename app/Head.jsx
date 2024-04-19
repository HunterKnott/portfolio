import PageLink from './PageLink';

export default function Head({ options }) {
    const listLinks = options.map((option, index) =>
        <PageLink
            key={index}
            text={option === "App" ? "Home" : option}
            path={option === "App" ? "../" : `./${option.toLowerCase()}`}
        />
    );

    return (
        <header className="bg-gray-100 w-full shadow-md fixed z-20">
            <div className="container mx-auto flex items-center justify-between px-24 py-4">
                <h1 className="text-3xl font-bold text-gray-800">Hunter Knott</h1>
                <nav className="flex space-x-8">
                    {listLinks}
                </nav>
            </div>
        </header>
    )
}