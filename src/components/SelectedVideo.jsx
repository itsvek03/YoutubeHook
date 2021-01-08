import React from 'react'

export default function SelectedVideo() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card shadow-lg">
                            <div className="card-body">

                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe
                                        title="video player"
                                        className="embed-responsive-item w-100"
                                        src="https://www.youtube.com/embed/Bg8Yb9zGYyA"
                                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
