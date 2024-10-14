// Fetch de productos desde una API con react query
const fetchData = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export { fetchData };