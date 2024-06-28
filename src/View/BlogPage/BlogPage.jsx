import CoverText from "../../Component/CoverText.jsx";
import {Box, Grid} from "@mui/material";
import {blogsData} from "../../utils//BlogsData.js";
import CardForBlogs from "../../Component/CardForBlogs.jsx";

function BlogPage() {
    return (
        <>
            <CoverText text="Blogs"/>
            <Box style={{marginBottom:40}} paddingX={2}>
                <Grid container spacing={2} alignContent="center">
                    {blogsData.map((data, index) => (
                        <Grid item xs={12} sm={6} md={3}  key={index}>
                            <CardForBlogs description={data.description} title={data.title}/>
                        </Grid>
                    ))}
                </Grid>

            </Box>
        </>
    );
}

export default BlogPage;