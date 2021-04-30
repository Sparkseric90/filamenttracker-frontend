import { Link } from "react-router-dom"


export default function Login(props) {

    return (
        <div class="card text-center">

                <div class="card-header">
                    Sparks 3D Designs
                </div>

            <div className="row text-center mt-3">
                <div className="col-md-12 col-sm-12">
                    <div class="card-body">

                        <div className="input-group mb-4">
                            <input type="text" className="form-control" placeholder="Email" aria-label="Username" />
                        </div>

    

                        <div className="input-group mb-4">
                            <input type="text" className="form-control" placeholder="Password" aria-label="Password" />
                        </div>

                            <Link to="/Main/"><button type="button" class="btn btn-outline-danger">Login</button></Link>

                        <div className="row text-center mt-4">
                            <div class="card-footer text-muted">
                                <p>Support: Eric@Sparks3DDesigns.com</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}