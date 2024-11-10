import './index.css'

const NotFound = () => (
  <div className="not-found-page-container">
    <div className="not-found-mssg-card ">
      <img
        className="not-found-img"
        src="https://res.cloudinary.com/da9omg4ab/image/upload/v1728299468/not-found_wss9nf.png"
        alt="not found"
      />
      <h1 className="not-found-heading">Page Not Found.</h1>
      <p className="not-found-text">
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </div>
)

export default NotFound
