export const About = function() {
    return (
        <>
            <div class="card d-flex flex-row justify-content-between m-4" id="about">

            <div className="card" style={{width: 18 + 'rem'}}>
    <div className="card-body m-4">
    <h5 className="card-title">About Me</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Quick Intro</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>

<div className="card" style={{width: 18 + 'rem'}}>
  <img src="https://images.vexels.com/media/users/3/299242/isolated/preview/d5775e2481cdc174bdde04f96a58cdb1-orange-summer-cute-icon.png" className="card-img-top" alt="orange" />
</div>

            </div>
        </>
    )
}