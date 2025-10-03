export default async function getData(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        } else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}