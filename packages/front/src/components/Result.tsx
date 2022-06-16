import post1 from '../blog-posts/contact.md';
import * as React from 'react';
import Main from './Main'


export default function Result(){

    const [postContent, setPostcontent] = React.useState('')
    // const [isDark, setIsDark] = React.useState(true)

    React.useEffect(() => {
    import('../blog-posts/contact.md')
        .then(res =>
        fetch(res.default)
            .then(response => response.text())
            .then(response => setPostcontent(response))
            .catch(err => console.log(err))
        )
    }, [])

    return(
        <Main title="From the firehose" posts={postContent} />
    );
}