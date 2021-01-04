import React from 'react';

export default function SearchInput() {
    return (
        <>
            <div className="container">
                <div className="col-md-12">
                    <div class="form-group">
                        <input type="text"
                            class="form-control"
                            name="search"
                            placeholder="Search for your favourite video ...." />
                    </div>
                </div>
            </div>
        </>
    );
}
