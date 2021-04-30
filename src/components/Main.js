import { Link } from "react-router-dom"


export default function Login(props) {


    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Sparks 3D Designs</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Filaments</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Add Filaments</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div class="row">
                <div class="col-md-1">
                </div>
                <div class="col-md-10">
                    <div class="card">
                        <h5 class="card-header">
                            Filament
				</h5>
                        <div class="card-body">
                            <p class="card-text">
                                Filaments Listed Here!
					</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-1">
                </div>
            </div>
        </div>

    )
};