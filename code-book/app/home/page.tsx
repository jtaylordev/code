function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <nav className="bg-blue-600 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">My Website</h1>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-gray-300">Home</a></li>
                        <li><a href="#" className="hover:text-gray-300">About</a></li>
                        <li><a href="#" className="hover:text-gray-300">Services</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
                <section className="bg-gray-100 py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
                        <p className="text-lg mb-6">We provide the best services for you.</p>
                        <img
                            src="https://via.placeholder.com/1200x400"
                            alt="Banner Image"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-blue-600 text-white p-4 mt-auto">
                <div className="container mx-auto text-center">
                    <p>&copy; {new Date().getFullYear()} My Website. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Page;