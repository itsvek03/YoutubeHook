import React from 'react'
//import '../style/style.css'
export default function SelectedVideo(props) {
    console.log("SelectedVideo", props)
    if (!props.selectvideo.id) {
        return <h1>Loading ..........</h1>
    }
    var url = `https://www.youtube.com/embed/${props.selectvideo.id.videoId}`

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="embed-responsive responsive-embed-4by3">
                            <iframe
                                title="video player"
                                className="embed-responsive-item w-100"
                                src={url}
                                allowFullScreen>
                            </iframe>
                        </div>
                        <div className="card-body">
                            <div>
                                <h1 className="h1 text-center">{props.selectvideo.snippet.description}</h1>
                                <h1 className="h1 text-center">{props.selectvideo.snippet.title}</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


