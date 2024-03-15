

export async function fetchproducts() {
    let response = await fetch(`https://fakestoreapi.com/products`)
        if (!response.ok) {
            const error = new Error('Un available')
            error.code = response.status
            error.message = await response.json()
        }
        return await response.json()

}
