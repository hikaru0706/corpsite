import post1 from '../blog-posts/member.md';
import * as React from 'react';
import Main from './Main';
// import CustomizedTables from './Table';

export default function Member(){

    const [postContent, setPostcontent] = React.useState('')
    // const [isDark, setIsDark] = React.useState(true)

    React.useEffect(() => {
    import('../blog-posts/member.md')
        .then(res =>
        fetch(res.default)
            .then(response => response.text())
            .then(response => setPostcontent(response))
            .catch(err => console.log(err))
        )
    }, [])

    return(
        <>
        <Main title="From the firehose" posts={postContent} />
        {/* <CustomizedTables/> */}
        </>
    );
}