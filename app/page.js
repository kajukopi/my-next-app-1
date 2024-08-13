// `app/page.js` is the UI for the `/` URL

export default async function Page() {
  const response = await fetch("http://localhost:3000/api").then((data) => data.json())
  console.log(response)
  return (
    <section className=" d-flex flex-column justify-content-center align-items-stretch">
      <h1 className="d-flex align-self-stretch">Hello, Home Page!</h1>
      {response.forEach((item) => {
        ;<h1>{item}</h1>
      })}
      <hr className="hr d-flex align-content-start"></hr>
      <form action="/api/items/create" method="post" className="d-flex flex-column align-items-stretch">
        <div className="form-outline mb-2 border shadow shadow-3 rounded">
          <input className="form-control" type="text" name="name" id="name" />
          <label htmlFor="name" className="form-label">
            Name
          </label>
        </div>
        <div className="form-outline mb-2 border shadow shadow-3 rounded">
          <input className="form-control" type="text" name="description" id="description" />
          <label htmlFor="description" className="form-label">
            Description
          </label>
        </div>
        <div className="form-outline mb-2 border shadow shadow-3 rounded">
          <input className="form-control" type="number" name="price" id="price" />
          <label htmlFor="price" className="form-label">
            Price
          </label>
        </div>
        <button className="btn btn-primary btn-sm my-2" type="submit">
          submit
        </button>
      </form>
    </section>
  )
}
