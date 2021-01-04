import React from 'react';
import SearchInput from './SearchInput'

export default function App() {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <div class="card text-left shadow-lg">
                            <div class="card-body">
                                <SearchInput />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-5 p-2">
                <div className="row">
                    <div className="col-md-8">
                        <div class="card text-left shadow-lg">
                            <div class="card-body">
                                <h1><SelectVideo /></h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card text-left shadow-lg">
                            <div class="card-body">
                                <h1><VideoList /></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
