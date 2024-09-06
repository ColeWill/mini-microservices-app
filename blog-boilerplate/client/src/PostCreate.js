import React from 'react'

export const PostCreate = () =>{
    return <div>
        <form>
            <div className="form-group">
                <label>title</label>
                <input className="form-control"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
}