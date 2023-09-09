
function Test() {
    const testApi = async (e) => {
        console.log("Button pressed!");
        try {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: "cafecito", price: 30.0, image: "cafecito", categoryId: 1 }),
            })

            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <button type="button" className="px-5 py-5 bg-indigo-950 text-white rounded font-bold text-xl"
            onClick={testApi}
        >
            Submit
        </button>
    )
}

export default Test