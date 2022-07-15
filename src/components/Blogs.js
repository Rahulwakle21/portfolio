import React, { useEffect, useState } from 'react'
import axios from "axios";

function Blogs() {
    const [post , setPost]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/').then((res)=>{
            setPost(res.data);
        })
    })
    return (
        <div>
            <h2 className='text-center py-3'>Fetch Data</h2>
            <div className="container">
                <div className="row">
                    {
                        post.map((item)=>{
                            return(
                                <div className="col-4">
                                <div className="card">
                                <h5 className="card-header">{item.id}</h5>
                                <div className="card-body">
                                  <h5 className="card-title">{item.title}</h5>
                                  <p className="card-text">
                                    {item.body}
                                  </p>
                                </div>
                              </div>
                        
            
                        
                        </div>
                            )
                        })
                    }
                
                
                </div>
            </div>
        </div>
    )
}

export default Blogs
