import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Company from './Company';
import Results from './Result';
import Members from './Member';
import Contact from './Contact';

const sections = [
  { title: 'About this company', url: 'company' },
  { title: 'member', url: 'members' },
  { title: 'blog', url: 'blog' },
  { title: 'Contact', url: 'Contact' },
];

const mainFeaturedPost = {
  title: 'Voyager',
  description:
    "voyager means 航海者 in Japanese. The Voyager is a space probe launched by NASA and completed a solar system grand tour. Originally I liked space myself, and when I became independent, I wanted to challenge a world I had never seen as a voyager, so I chose this company name",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

// const posts = [post1, post2, post3];


const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },

    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {

  // const [postContent, setPostcontent] = React.useState('')

  // React.useEffect(() => {
  //   import('../blog-posts/blog-post.1.md')
  //     .then(res =>
  //       fetch(res.default)
  //         .then(response => response.text())
  //         .then(response => setPostcontent(response))
  //         .catch(err => console.log(err))
  //     )
  // }, [])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="株式会社Voyager" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
          <Grid container spacing={5} sx={{ mt: 3 }}>
          <BrowserRouter>
            <Routes>
              <Route path={`/company`} element={< Company/>} />
              <Route path={`/results`} element={<Results/>} />
              <Route path={`/members`} element={<Members/>} />
              <Route path={`/contact`} element={<Contact/>} />
               
            </Routes>
          </BrowserRouter>
            {/* <Main title="From the firehose" posts={postContent} /> */}
            {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Voyager"
        description="we choose to go to the moon"
      />
    </ThemeProvider>
  );
}