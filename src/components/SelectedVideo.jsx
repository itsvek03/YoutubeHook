import React from 'react'

export default function SelectedVideo(props) {
    console.log("SelectedVideo", props)
    // console.log(props.selectvideo);
    // const ky = props.selectvideo.id.videoId;
    // console.log(ky)
    let url = `https://www.youtube.com/embed/${props.selectvideo.id.videoId}`
    //console.log(url)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card shadow-lg" style={{ height: '100%' }}>
                            <div className="card-body">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe
                                        title="video player"
                                        className="embed-responsive-item w-100"
                                        src={url}
                                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                    </iframe>


                                    {/* <div>
                                        <h1 className="h1 text-center">{selectvideo.snippet.title}</h1>
                                        <h1 className="h1 text-center">{selectvideo.snippet.description}</h1>
                                    </div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
