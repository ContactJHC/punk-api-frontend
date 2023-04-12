const fetchData = async(endpoint) => {
    try {
        const data = await fetch(`${endpoint}`)
            .then((res) => res.json())
            .then((data) => data)
        return (
            data
        )
    } catch (err) {
        console.log(err)
        return err
    }
}

const fetchOneBeerData = async(id) => {
    try {
        const data = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
            .then((res) => res.json())
            .then((data) => data)
        return (
            data
        )
    } catch (err) {
        console.log(err)
        return err
    }
}

export { fetchData, fetchOneBeerData }

