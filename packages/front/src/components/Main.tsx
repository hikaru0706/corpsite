import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';

interface MainProps {
  // posts: ReadonlyArray<string>;
  posts:string;
  title: string;
}


export default function Main(props: MainProps) {
  const { posts, title } = props;


  return (
    <Grid
      item
      xs={12}
      md={12}
      sx={{
        '& .markdown': {
          py: 0,
        },
      }}
    >
      {/* <Typography variant="h6" gutterBottom>
        {title}
      </Typography> */}
      {/* <Divider /> */}
      {/* {posts.map((post) => ( */}
        <Markdown className="markdown" key={posts.substring(0, 40)}>
          {posts}
        </Markdown>
      {/* ))} */}
    </Grid>
  );
}