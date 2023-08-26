
function Testimonial() {
    return (
      <>
      <article>
      <h3>Testimonials</h3>
      <div>
        <label>Rating</label>
        <img src = "/src/asset/testimonial-img.jpg" width="30" height ="50" name="Karina" alt="profile"/>
        <form>
        <input type="text" placeholder="review" alt="review" />
        <button className="submit">submit</button>
        </form>
        </div>
      </article>
      </>
    )
  }
export default Testimonial