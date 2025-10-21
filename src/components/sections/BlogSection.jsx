import React from 'react';
import BlogPost from '../ui/BlogPost';

export default function BlogSection() {
    return (
        <div className="flex flex-col gap-y-6">
            <h2>Blogs</h2>
                <BlogPost
                    title="#FirstPost"
                    date="October 21, 2025"
                    description="A reflection on the development of this website."
                    link="https://google.com"
                />
        </div>
    )
}